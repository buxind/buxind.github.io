# 部署说明

本站是 VitePress 静态站。构建后生成的 `docs/.vitepress/dist` 可以部署到 GitHub Pages、Vercel、Netlify 或学校服务器。

## 本地命令

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages 推荐流程

1. 在 GitHub 新建仓库，例如 `ahstu-freshman-guide`。
2. 上传当前项目文件。
3. 添加 GitHub Actions 工作流，构建命令使用 `npm ci && npm run build`。
4. Pages 发布目录选择构建产物 `docs/.vitepress/dist`。
5. 绑定自定义域名前，先用 GitHub Pages 默认域名测试移动端和外链。

## 发布前检查

<ul class="check-list">
  <li>首页在手机宽度下不横向滚动。</li>
  <li>搜索框能搜索“报到、食堂、校园卡、凤阳、龙湖、滁州”。</li>
  <li>所有外链都能打开，尤其是迎新网、招生就业处、常用服务。</li>
  <li>页面底部更新时间已经更新到发布当天。</li>
  <li>第三方经验内容保留“待核验”或“经验参考”标记。</li>
</ul>

更新时间：2026-06-01
