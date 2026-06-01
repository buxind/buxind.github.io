import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '安徽科技工程大学',
  description: '面向安徽科技工程大学报考学生、录取新生和家长的校园攻略',
  cleanUrls: true,
  lastUpdated: true,
  vite: {
    server: {
      allowedHosts: true
    }
  },
  themeConfig: {
    logo: '/images/ahstu-emblem.jpeg',
    nav: [
      { text: '首页', link: '/' },
      { text: '认识安科', link: '/about' },
      { text: '新生报到', link: '/arrival' },
      { text: '校园生活', link: '/campus-life' },
      { text: '资料包', link: '/freshman-pack' },
      { text: '实用工具', link: '/tools' }
    ],
    sidebar: [
      {
        text: '新生攻略',
        items: [
          { text: '首页总览', link: '/' },
          { text: '认识安科', link: '/about' },
          { text: '新生报到', link: '/arrival' },
          { text: '校园生活', link: '/campus-life' },
          { text: '2026 新生资料包', link: '/freshman-pack' },
          { text: '实用工具', link: '/tools' },
          { text: '资料来源', link: '/sources' },
          { text: '部署说明', link: '/deploy' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '页面更新'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '非官方学生攻略站。重要安排请以学校官方通知为准。',
      copyright: '内容整理日期：2026-06-01'
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/images/ahstu-emblem.jpeg' }],
    ['meta', { name: 'theme-color', content: '#1f7a5c' }],
    ['meta', { property: 'og:title', content: '安科新生攻略' }],
    ['meta', { property: 'og:description', content: '报考、录取、报到、生活，一站熟悉安徽科技工程大学。' }]
  ]
})
