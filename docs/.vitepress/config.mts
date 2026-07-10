import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '赵坤的博客',
  description: '分享技术心得与生活感悟',
  lang: 'zh-CN',
  base: '/zk-blog/',
  head: [
    ['link', { rel: 'icon', href: '/zk-blog/logo.png', type: 'image/png' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' },
    ],
    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: [
            { text: '第一篇文章', link: '/posts/first-post' },
            { text: 'Vue 3 学习笔记', link: '/posts/vue3-notes' },
            { text: 'VitePress 搭建博客', link: '/posts/vitepress-blog' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/zhaokunxiaomu' }],
    search: {
      provider: 'local',
    },
  },
})
