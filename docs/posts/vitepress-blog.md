---
title: 使用 VitePress 搭建个人博客
date: 2026-07-08
tags: [VitePress, 博客搭建]
---

## 什么是 VitePress

VitePress 是 Vue 官方推出的静态网站生成器，基于 Vite 和 Vue 3 构建。

## 搭建步骤

### 1. 初始化项目

```bash
pnpm init
pnpm add -D vitepress
```

### 2. 创建配置文件

创建 `docs/.vitepress/config.mts`：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的博客',
  description: '个人技术博客',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' }
    ]
  }
})
```

### 3. 创建页面

创建 `docs/index.md` 作为首页，`docs/posts/` 目录存放文章。

### 4. 运行开发服务器

```bash
pnpm run docs:dev
```

## 优势

- **极速开发体验**：基于 Vite，热更新秒级响应
- **Vue 驱动**：支持 Vue 组件嵌入
- **Markdown 优先**：专注内容创作
- **SEO 友好**：完美支持静态站点生成

## 部署

可以部署到以下平台：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
