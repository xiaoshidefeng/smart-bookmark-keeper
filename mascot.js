// mascot.js — 「小管家」像素机器人（本项目原创形象，rect 像素拼装）
// 本文件只负责骨架结构与状态机；配色（token）与全部状态动画由 styles.css 的 .mascot-* 规则驱动。
// 位置机制：working 状态下机器人 x 坐标 = 真实扫描进度（--mascot-x），非装饰性循环动画。
(function (global) {
  'use strict';

  // viewBox 16×17；眼型分组切换（normal/happy/sleepy）承担表情，CSS 按状态显隐
  const SVG_TEMPLATE = `
    <svg class="mascot-svg" viewBox="0 0 16 17" shape-rendering="crispEdges" role="img" data-i18n-aria-label="scan.mascotAria" aria-hidden="true">
      <rect class="mascot-shadow" x="4" y="15.4" width="8" height="0.9"></rect>
      <g class="mascot-robot">
        <g class="mascot-antenna">
          <rect class="mascot-part-antenna" x="7.5" y="1.3" width="1" height="1.6"></rect>
          <rect class="mascot-part-antenna mascot-antenna-tip" x="7.05" y="0.1" width="1.9" height="1.3"></rect>
        </g>
        <g class="mascot-body">
          <rect class="mascot-part-body" x="3" y="2.8" width="10" height="7.9"></rect>
          <rect class="mascot-part-screen" x="4.6" y="4.2" width="6.8" height="4.2"></rect>
          <g class="mascot-eyes">
            <g class="mascot-eyes-normal">
              <rect class="mascot-part-eye" x="6.1" y="4.9" width="1.1" height="1.9"></rect>
              <rect class="mascot-part-eye" x="8.8" y="4.9" width="1.1" height="1.9"></rect>
            </g>
            <g class="mascot-eyes-happy">
              <rect class="mascot-part-eye" x="5.9" y="5.5" width="1.5" height="0.9"></rect>
              <rect class="mascot-part-eye" x="8.6" y="5.5" width="1.5" height="0.9"></rect>
              <rect class="mascot-part-eye" x="7" y="7.1" width="2" height="0.7"></rect>
            </g>
            <g class="mascot-eyes-sleepy">
              <rect class="mascot-part-eye" x="5.9" y="5.7" width="1.5" height="0.6"></rect>
              <rect class="mascot-part-eye" x="8.6" y="5.7" width="1.5" height="0.6"></rect>
            </g>
          </g>
          <rect class="mascot-part-collar" x="3" y="9.9" width="10" height="0.8"></rect>
          <rect class="mascot-part-knob" x="7.3" y="9.55" width="1.4" height="1.4"></rect>
        </g>
        <g class="mascot-arm mascot-arm-l"><rect class="mascot-part-limb" x="1.1" y="6.2" width="1.7" height="2.6"></rect></g>
        <g class="mascot-arm mascot-arm-r"><rect class="mascot-part-limb" x="13.2" y="6.2" width="1.7" height="2.6"></rect></g>
        <g class="mascot-leg mascot-leg-l"><rect class="mascot-part-leg" x="4.4" y="10.7" width="1.9" height="3.9"></rect></g>
        <g class="mascot-leg mascot-leg-r"><rect class="mascot-part-leg" x="9.7" y="10.7" width="1.9" height="3.9"></rect></g>
        <g class="mascot-broom">
          <rect class="mascot-part-broom-handle" x="14.45" y="5.8" width="1" height="7.2"></rect>
          <rect class="mascot-part-broom-band" x="13.75" y="12.8" width="2.4" height="0.8"></rect>
          <rect class="mascot-part-broom-bristle" x="13.45" y="13.4" width="3" height="1.7"></rect>
        </g>
        <g class="mascot-dust">
          <rect class="dust-p dust-p1" x="16.3" y="14.1" width="0.8" height="0.8"></rect>
          <rect class="dust-p dust-p2" x="17" y="14.5" width="0.6" height="0.6"></rect>
          <rect class="dust-p dust-p3" x="15.9" y="14.7" width="0.5" height="0.5"></rect>
        </g>
      </g>
    </svg>`;

  let stage = null;
  let moveEl = null;
  let robotWrap = null;
  let eyesEl = null;
  let currentState = 'idle';
  let motionEnabled = true;
  let lastX = 50;
  let successTimer = null;
  let dizzyTimer = null;
  let flipTimer = null;
  let eyeRaf = 0;
  let getEnabled = () => true;

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function prefersReducedMotion() {
    return Boolean(global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  // 动效总开关：设置项 + 系统减弱动态效果都不满足时仅保留静态姿态
  function motionActive() {
    return Boolean(stage) && motionEnabled && getEnabled() && !prefersReducedMotion();
  }

  function init(options = {}) {
    const host = options.container;
    if (!host || stage) {
      return;
    }
    getEnabled = options.getMotionEnabled || getEnabled;

    stage = document.createElement('div');
    stage.className = 'mascot-stage';
    stage.dataset.state = 'idle';
    stage.dataset.facing = 'right';
    stage.innerHTML = `<div class="mascot-track" aria-hidden="true"></div><div class="mascot-track-clean" aria-hidden="true"></div><div class="mascot-move">${SVG_TEMPLATE}</div>`;
    host.appendChild(stage);

    moveEl = stage.querySelector('.mascot-move');
    robotWrap = stage.querySelector('.mascot-robot');
    eyesEl = stage.querySelector('.mascot-eyes');

    // 点击彩蛋：原地空翻（一次、无文字气泡）
    stage.addEventListener('click', () => {
      if (!motionActive() || flipTimer) {
        return;
      }
      robotWrap.classList.remove('is-flip');
      void robotWrap.getBoundingClientRect();
      robotWrap.classList.add('is-flip');
      flipTimer = setTimeout(() => {
        robotWrap.classList.remove('is-flip');
        flipTimer = null;
      }, 700);
    });

    // 瞳孔跟随：仅扫描卡区域内、仅静态状态（idle/success）响应；rAF 节流
    host.addEventListener('mousemove', (event) => {
      if (!motionActive() || (currentState !== 'idle' && currentState !== 'success') || eyeRaf) {
        return;
      }
      const point = event;
      eyeRaf = global.requestAnimationFrame(() => {
        eyeRaf = 0;
        pointEyes(point);
      });
    });
    host.addEventListener('mouseleave', resetEyes);
  }

  function pointEyes(event) {
    if (!eyesEl) {
      return;
    }
    const rect = eyesEl.getBoundingClientRect();
    if (!rect.width) {
      return;
    }
    const dx = clamp(((event.clientX - (rect.left + rect.width / 2)) / 260) * 1.4, -1, 1);
    const dy = clamp(((event.clientY - (rect.top + rect.height / 2)) / 260) * 0.9, -0.6, 0.6);
    // 0.5px 量化：像素风步进感
    eyesEl.style.setProperty('--eye-dx', `${(Math.round(dx * 2) / 2).toFixed(1)}px`);
    eyesEl.style.setProperty('--eye-dy', `${(Math.round(dy * 2) / 2).toFixed(1)}px`);
  }

  function resetEyes() {
    if (!eyesEl) {
      return;
    }
    eyesEl.style.setProperty('--eye-dx', '0px');
    eyesEl.style.setProperty('--eye-dy', '0px');
  }

  function setWalkerX(percent, { silent = false } = {}) {
    if (!stage) {
      return;
    }
    // 写在 stage 上：.mascot-move（机器人位移）与 .mascot-track-clean（清洁层 clip）共用同一进度变量
    stage.style.setProperty('--mascot-x', `${percent}%`);
    lastX = percent;
    if (silent && moveEl) {
      const prevTransition = moveEl.style.transition;
      moveEl.style.transition = 'none';
      void moveEl.getBoundingClientRect();
      moveEl.style.transition = prevTransition;
    }
  }

  function setState(next) {
    if (!stage || currentState === next) {
      return;
    }
    if (successTimer) {
      clearTimeout(successTimer);
      successTimer = null;
    }
    currentState = next;
    stage.dataset.state = next;
    if (next === 'idle') {
      // 回到环形进度正下方待命（无过渡瞬移由 silent 处理为居中）
      setWalkerX(50, { silent: !motionActive() });
      stage.dataset.facing = 'right';
    } else if (next === 'success') {
      // 冲线：扫完最后一段，清洁层补满到 100%
      setWalkerX(100);
      successTimer = setTimeout(() => setState('idle'), 4200);
    }
  }

  // working 状态专用：x = 真实扫描进度百分比；朝向由进度增量决定
  function setProgress(percent) {
    if (!stage || currentState !== 'working') {
      return;
    }
    const p = clamp(percent, 0, 100);
    if (p > lastX + 0.25) {
      stage.dataset.facing = 'right';
    } else if (p < lastX - 0.25) {
      stage.dataset.facing = 'left';
    }
    setWalkerX(p);
  }

  // 扫描中发现新的失效书签：踉跄反馈
  function notifyInvalidFound() {
    if (!robotWrap || !motionActive()) {
      return;
    }
    robotWrap.classList.remove('is-dizzy');
    void robotWrap.getBoundingClientRect();
    robotWrap.classList.add('is-dizzy');
    if (dizzyTimer) {
      clearTimeout(dizzyTimer);
    }
    dizzyTimer = setTimeout(() => robotWrap.classList.remove('is-dizzy'), 650);
  }

  // 「印章」庆祝：盖在指定卡片上，自动淡出移除
  function stamp({ container, text, tone = 'success' } = {}) {
    if (!container || !text) {
      return;
    }
    container.querySelectorAll('.motion-stamp').forEach((node) => node.remove());
    const el = document.createElement('div');
    el.className = `motion-stamp tone-${tone}`;
    el.textContent = text;
    container.appendChild(el);
    global.requestAnimationFrame(() => el.classList.add('show'));

    container.classList.remove('is-stamped');
    void container.offsetWidth;
    container.classList.add('is-stamped');

    setTimeout(() => {
      el.classList.remove('show');
      el.classList.add('is-gone');
      setTimeout(() => el.remove(), 400);
    }, 2400);
    setTimeout(() => container.classList.remove('is-stamped'), 500);
  }

  function setMotionEnabled(enabled) {
    motionEnabled = !!enabled;
    if (!motionEnabled) {
      resetEyes();
    }
  }

  // 空状态迷你版：同一骨架，data-variant 控制眼型（sleep = 睡觉眼）
  function buildMiniSvg(variant = 'idle') {
    return `<div class="mascot-mini" data-variant="${variant}" aria-hidden="true">${SVG_TEMPLATE}</div>`;
  }

  global.BK_MASCOT = {
    init,
    setState,
    setProgress,
    notifyInvalidFound,
    stamp,
    setMotionEnabled,
    buildMiniSvg
  };
})(window);
