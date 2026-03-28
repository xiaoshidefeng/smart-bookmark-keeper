# AI书签管理协议

## 目标

扩展前端把书签上下文和用户整理诉求发送给你自己的后端。
后端调用模型后，返回结构化动作计划。
前端先做本地校验和预览，用户确认后再应用到 Chrome 书签栏。

## 请求

`POST /api/bookmarks/plan`

```json
{
  "requestId": "uuid",
  "instruction": "帮我把前端学习相关书签集中整理到一个文件夹，并规范命名",
  "context": {
    "bookmarks": [
      {
        "id": "123",
        "title": "React Hooks Guide",
        "url": "https://example.com/react-hooks",
        "path": ["书签栏", "学习", "前端"],
        "parentId": "88"
      }
    ],
    "folders": [
      {
        "id": "88",
        "title": "前端",
        "path": ["书签栏", "学习", "前端"],
        "parentId": "12"
      }
    ]
  }
}
```

## 响应

不要返回完整书签树，返回动作计划。

```json
{
  "summary": "已将前端学习相关书签归拢到“前端开发”，并规范部分标题。",
  "warnings": [
    "有 2 条书签标题信息不足，建议人工复查。"
  ],
  "actions": [
    {
      "actionId": "a1",
      "type": "create_folder",
      "title": "前端开发",
      "parentPath": ["书签栏", "学习"]
    },
    {
      "actionId": "a2",
      "type": "move_bookmark",
      "bookmarkId": "123",
      "targetPath": ["书签栏", "学习", "前端开发"]
    },
    {
      "actionId": "a3",
      "type": "rename_bookmark",
      "bookmarkId": "124",
      "newTitle": "React Hooks 指南"
    },
    {
      "actionId": "a4",
      "type": "rename_folder",
      "folderId": "88",
      "newTitle": "旧前端资料"
    }
  ]
}
```

## 第一版支持的动作

- `create_folder`
- `move_bookmark`
- `rename_bookmark`
- `rename_folder`

## 第一版暂不支持

- `delete_bookmark`
- `delete_folder`
- `move_folder`
- 完整树覆盖式重组

## 动作字段

### create_folder

```json
{
  "actionId": "a1",
  "type": "create_folder",
  "title": "前端开发",
  "parentId": "12"
}
```

或

```json
{
  "actionId": "a1",
  "type": "create_folder",
  "title": "前端开发",
  "parentPath": ["书签栏", "学习"]
}
```

### move_bookmark

```json
{
  "actionId": "a2",
  "type": "move_bookmark",
  "bookmarkId": "123",
  "targetFolderId": "99"
}
```

或

```json
{
  "actionId": "a2",
  "type": "move_bookmark",
  "bookmarkId": "123",
  "targetPath": ["书签栏", "学习", "前端开发"]
}
```

### rename_bookmark

```json
{
  "actionId": "a3",
  "type": "rename_bookmark",
  "bookmarkId": "124",
  "newTitle": "React Hooks 指南"
}
```

### rename_folder

```json
{
  "actionId": "a4",
  "type": "rename_folder",
  "folderId": "88",
  "newTitle": "旧前端资料"
}
```

## 后端建议

- 按动作计划返回，不要返回自然语言步骤。
- 尽量返回 `actionId`，方便前端校验和展示。
- 如果引用新创建文件夹，推荐用 `targetPath`，便于前端按顺序应用。
- 如果 `move_bookmark.targetPath` 指向当前上下文里不存在的目录，必须先补齐对应的 `create_folder` 动作，再执行移动。
- 所有依赖新目录的动作，必须把 `create_folder` 排在前面，保证动作顺序可直接应用。
- 可以在 `warnings` 里放低置信度提示，不要混进 `summary`。
