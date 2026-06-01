# 安徽科技工程大学 2026 新生攻略

基于 VitePress 搭建的新生攻略网站，面向 2026 级新生、报考同学和家长。

## 本地预览

```bash
npm install
npm run dev
```

打开 `http://localhost:5173/`。

## 构建

```bash
npm run build
```

构建产物在 `docs/.vitepress/dist`。

## GitHub Pages 部署

仓库推送到 GitHub 后：

1. 进入仓库 `Settings -> Pages`。
2. `Build and deployment` 选择 `GitHub Actions`。
3. 推送到 `main` 分支，工作流会自动构建并发布。

部署成功后，GitHub 会给出 Pages 访问地址。
