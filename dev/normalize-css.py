#!/usr/bin/env python3
"""styles.css 一次性规范化：色值/阴影/圆角收口到 design token。
映射表由人工审计生成；:root token 块（行 11-128）不动。可重复执行（幂等）。"""
import re

PATH = '/Users/cw/Documents/project/chrome-bookmark-manager/styles.css'
TOKEN_START, TOKEN_END = 11, 128  # 1-based, :root token block

src = open(PATH).read()
lines = src.split('\n')

def in_token_block(idx):  # idx: 0-based line index
    return TOKEN_START - 1 <= idx <= TOKEN_END - 1

R = [
    # ---- 手工例外：kicker 底色陶土→琥珀（语义是 amber accent，先于通用映射执行）
    (r'rgba\(198,\s*123,\s*92,\s*0\.1\)', 'rgba(232, 165, 26, 0.14)'),
    # ---- box-shadow：中性 ad-hoc → token
    (r'0 8px 20px rgba\(15,\s*23,\s*42,\s*0\.04\)', 'var(--shadow-md)'),
    (r'0 6px 18px rgba\(15,\s*23,\s*42,\s*0\.03\)', 'var(--shadow-md)'),
    (r'0 8px 24px rgba\(15,\s*23,\s*42,\s*0\.04\)', 'var(--shadow-md)'),
    (r'0 10px 24px rgba\(15,\s*23,\s*42,\s*0\.04\)', 'var(--shadow-md)'),
    (r'0 12px 28px rgba\(15,\s*23,\s*42,\s*0\.06\)', 'var(--shadow-lg)'),
    (r'0 16px 32px rgba\(15,\s*23,\s*42,\s*0\.12\)', 'var(--shadow-xl)'),
    (r'0 12px 24px rgba\(15,\s*23,\s*42,\s*0\.18\)', 'var(--shadow-xl)'),
    (r'0 20px 48px rgba\(15,\s*23,\s*42,\s*0\.18\)', 'var(--shadow-xl)'),
    # ---- box-shadow：彩色 glow → 按模糊半径就近映射中性 token
    (r'0 12px 24px rgba\(67,\s*135,\s*244,\s*0\.18\)', 'var(--shadow-md)'),
    (r'0 16px 28px rgba\(67,\s*135,\s*244,\s*0\.22\)', 'var(--shadow-lg)'),
    (r'0 12px 26px rgba\(67,\s*135,\s*244,\s*0\.08\)', 'var(--shadow-md)'),
    (r'0 18px 42px rgba\(67,\s*135,\s*244,\s*0\.08\)', 'var(--shadow-lg)'),
    (r'0 14px 26px rgba\(67,\s*135,\s*244,\s*0\.2\)', 'var(--shadow-lg)'),
    (r'0 18px 30px rgba\(67,\s*135,\s*244,\s*0\.24\)', 'var(--shadow-lg)'),
    (r'0 14px 30px rgba\(67,\s*135,\s*244,\s*0\.08\)', 'var(--shadow-lg)'),
    (r'0 8px 16px rgba\(67,\s*135,\s*244,\s*0\.16\)', 'var(--shadow-md)'),
    (r'0 18px 42px rgba\(32,\s*158,\s*127,\s*0\.08\)', 'var(--shadow-lg)'),
    (r'0 12px 24px rgba\(84,\s*103,\s*196,\s*0\.1\)', 'var(--shadow-lg)'),
    (r'0 20px 44px rgba\(83,\s*104,\s*214,\s*0\.1\)', 'var(--shadow-lg)'),
    (r'0 10px 28px rgba\(77,\s*92,\s*184,\s*0\.06\)', 'var(--shadow-lg)'),
    (r'0 8px 16px rgba\(84,\s*103,\s*196,\s*0\.08\)', 'var(--shadow-md)'),
    (r'0 6px 14px rgba\(83,\s*101,\s*189,\s*0\.08\)', 'var(--shadow-md)'),
    (r'0 16px 32px rgba\(18,\s*26,\s*48,\s*0\.2\)', 'var(--shadow-xl)'),
    (r'0 8px 18px rgba\(84,\s*103,\s*196,\s*0\.06\)', 'var(--shadow-md)'),
    (r'0 10px 24px rgba\(96,\s*110,\s*183,\s*0\.08\)', 'var(--shadow-lg)'),
    (r'0 10px 24px rgba\(31,\s*71,\s*136,\s*0\.22\)', 'var(--shadow-lg)'),
    (r'0 4px 10px rgba\(52,\s*86,\s*160,\s*0\.08\)', 'var(--shadow-sm)'),
    (r'0 18px 42px rgba\(86,\s*132,\s*233,\s*0\.08\)', 'var(--shadow-lg)'),
    (r'inset 0 0 0 6px rgba\(117,\s*140,\s*255,\s*0\.04\)', 'inset 0 0 0 6px rgba(67, 135, 244, 0.04)'),
    (r'0 0 0 3px rgba\(74,\s*93,\s*78,\s*0\.1\)', '0 0 0 3px rgba(67, 135, 244, 0.12)'),
    (r'0 0 0 4px rgba\(111,\s*127,\s*255,\s*0\.14\)', '0 0 0 4px rgba(67, 135, 244, 0.14)'),
    # ---- rgba：紫/靛/青/绿/陶土/olive → 主蓝或琥珀家族
    (r'rgba\(76,\s*163,\s*222,', 'rgba(67, 135, 244,'),
    (r'rgba\(80,\s*118,\s*229,', 'rgba(67, 135, 244,'),
    (r'rgba\(107,\s*114,\s*255,', 'rgba(67, 135, 244,'),
    (r'rgba\(132,\s*96,\s*255,', 'rgba(67, 135, 244,'),
    (r'rgba\(117,\s*140,\s*255,', 'rgba(67, 135, 244,'),
    (r'rgba\(25,\s*155,\s*107,', 'rgba(67, 135, 244,'),
    (r'rgba\(32,\s*158,\s*127,', 'rgba(67, 135, 244,'),
    (r'rgba\(184,\s*92,\s*92,', 'rgba(211, 58, 99,'),
    (r'rgba\(198,\s*123,\s*92,', 'rgba(67, 135, 244,'),
    (r'rgba\(118,\s*110,\s*96,', 'rgba(67, 135, 244,'),
    (r'rgba\(74,\s*93,\s*78,', 'rgba(67, 135, 244,'),
    (r'rgba\(148,\s*163,\s*184,\s*0\.2\)', 'var(--border-medium)'),
    (r'rgba\(148,\s*163,\s*184,\s*(?:0\.08|0\.14|0\.16|0\.18)\)', 'var(--border-light)'),
    # 米白/米色底 → 蓝调纸色
    (r'rgba\(250,\s*249,\s*247,', 'rgba(252, 253, 255,'),
    (r'rgba\(247,\s*243,\s*239,', 'rgba(245, 248, 255,'),
    (r'rgba\(245,\s*243,\s*239,', 'rgba(245, 248, 255,'),
    # ---- hex：主蓝直写 → token
    (r'#2f6fda\b', 'var(--color-primary-600)'),
    (r'#2458ad\b', 'var(--color-primary-700)'),
    (r'#4387f4\b', 'var(--color-primary-500)'),
    (r'#1f4f98\b', 'var(--color-primary-800)'),
    (r'#183b73\b', 'var(--color-primary-900)'),
    (r'#1f3a63\b', 'var(--color-primary-900)'),
    (r'#5a98fb\b', 'var(--color-primary-400)'),
    (r'#68a1fc\b', 'var(--color-primary-400)'),
    (r'#4b8df5\b', 'var(--color-primary-500)'),
    (r'#4a8df5\b', 'var(--color-primary-500)'),
    (r'#6aa2fc\b', 'var(--color-primary-300)'),
    (r'#5c9bff\b', 'var(--color-primary-400)'),
    (r'#5e9cff\b', 'var(--color-primary-400)'),
    (r'#93bcff\b', 'var(--color-primary-200)'),
    (r'#316fd7\b', 'var(--color-primary-600)'),
    (r'#356ecf\b', 'var(--color-primary-600)'),
    (r'#5b90e8\b', 'var(--color-primary-500)'),
    (r'#315f9e\b', 'var(--color-primary-700)'),
    (r'#2274aa\b', 'var(--color-primary-600)'),
    # ---- hex：manage 绿 → 主蓝
    (r'#177b57\b', 'var(--color-primary-700)'),
    (r'#15795f\b', 'var(--color-primary-700)'),
    (r'#147d56\b', 'var(--color-primary-700)'),
    (r'#16765d\b', 'var(--color-primary-700)'),
    (r'#5d786d\b', 'var(--text-muted)'),
    # ---- hex：AI 靛/紫 → 主蓝
    (r'#4260c7\b', 'var(--color-primary-600)'),
    (r'#4860c7\b', 'var(--color-primary-600)'),
    (r'#435cc7\b', 'var(--color-primary-600)'),
    (r'#4b63d9\b', 'var(--color-primary-600)'),
    (r'#5b62d6\b', 'var(--color-primary-600)'),
    (r'#4f58cb\b', 'var(--color-primary-600)'),
    (r'#485fcb\b', 'var(--color-primary-600)'),
    (r'#3147bf\b', 'var(--color-primary-700)'),
    (r'#6272c5\b', 'var(--color-primary-500)'),
    (r'#5b6dd6\b', 'var(--color-primary-500)'),
    (r'#6e7ef2\b', 'var(--color-primary-500)'),
    (r'#6f7fff\b', 'var(--color-primary-500)'),
    (r'#6b73ff\b', 'var(--color-primary-500)'),
    (r'#a26dff\b', 'var(--color-primary-400)'),
    # ---- hex：slate 灰 → 文本 token
    (r'#64748b\b', 'var(--text-muted)'),
    (r'#94a3b8\b', 'var(--text-muted)'),
    (r'#475569\b', 'var(--text-secondary)'),
    (r'#9aa5b6\b', 'var(--text-muted)'),
    (r'#7c889d\b', 'var(--text-tertiary)'),
    (r'#48617f\b', 'var(--text-secondary)'),
    (r'#7a8ca5\b', 'var(--text-muted)'),
    (r'#61738d\b', 'var(--text-tertiary)'),
    (r'#657289\b', 'var(--text-tertiary)'),
    (r'#66748c\b', 'var(--text-tertiary)'),
    (r'#7684a0\b', 'var(--text-muted)'),
    (r'#62749a\b', 'var(--text-tertiary)'),
    (r'#8b97ab\b', 'var(--text-muted)'),
    (r'#98a3bb\b', 'var(--text-muted)'),
    (r'#7f8a9b\b', 'var(--text-muted)'),
    (r'#8d98b0\b', 'var(--text-muted)'),
    (r'#7a88a1\b', 'var(--text-muted)'),
    (r'#7d89a0\b', 'var(--text-muted)'),
    (r'#31405d\b', 'var(--text-primary)'),
    (r'#2f405a\b', 'var(--text-secondary)'),
    (r'#56708f\b', 'var(--text-secondary)'),
    (r'#42526b\b', 'var(--text-secondary)'),
    # ---- hex：danger 变体 → danger-700
    (r'#a12c4d\b', 'var(--color-danger-700)'),
    (r'#b33256\b', 'var(--color-danger-700)'),
    (r'#962645\b', 'var(--color-danger-700)'),
    (r'#be274f\b', 'var(--color-danger-700)'),
    (r'#b64667\b', 'var(--color-danger-700)'),
    # ---- hex：amber 变体 → accent token
    (r'#8f6518\b', 'var(--color-accent-700)'),
    (r'#9a6a14\b', 'var(--color-accent-700)'),
    (r'#7e5610\b', 'var(--color-accent-800)'),
    (r'#7a5613\b', 'var(--color-accent-800)'),
    (r'#c58a1f\b', 'var(--color-accent-600)'),
    (r'#9f690e\b', 'var(--color-accent-700)'),
    # ---- hex：语义色直写 → token
    (r'#199b6b\b', 'var(--color-success)'),
    (r'#d33a63\b', 'var(--color-danger)'),
    # ---- hex：AI 淡紫底 → primary-50
    (r'#f9f4ff\b', 'var(--color-primary-50)'),
    (r'#f7f3eb\b', 'var(--bg-secondary)'),
    # ---- 圆角收口
    (r'border-radius:\s*999px', 'border-radius: var(--radius-full)'),
    (r'border-radius:\s*(?:18|20|22|24)px', 'border-radius: var(--radius-xl)'),
    (r'border-radius:\s*(?:12|14)px', 'border-radius: var(--radius-lg)'),
    (r'border-radius:\s*(?:8|10)px', 'border-radius: var(--radius-md)'),
    (r'border-radius:\s*6px', 'border-radius: var(--radius-sm)'),
]

total = 0
per_rule = []
for pattern, repl in R:
    n = 0
    for i, line in enumerate(lines):
        if in_token_block(i):
            continue
        new_line, k = re.subn(pattern, repl, line)
        if k:
            lines[i] = new_line
            n += k
    per_rule.append((pattern[:44], n))
    total += n

# 新增 danger-700 token（插在 --color-danger 行后）
for i, line in enumerate(lines):
    if '--color-danger:' in line and in_token_block(i):
        lines.insert(i + 1, '  --color-danger-700: #b12c53;')
        TOKEN_END += 1  # token 块整体下移一行
        break

# 更新文件头注释（与实际视觉系统一致）
for i, line in enumerate(lines[:6]):
    if 'avoiding cold blues' in line:
        lines[i] = line.replace('Warm, editorial palette avoiding cold blues',
                                'Product blue + warm amber; all values via tokens')
    if 'Tone: Refined, warm, professional' in line:
        lines[i] = '   Tone: Refined, professional, unified blue'

open(PATH, 'w').write('\n'.join(lines))
print(f'total replacements: {total}')
for p, n in per_rule:
    if n:
        print(f'  {n:3d}  {p}')
