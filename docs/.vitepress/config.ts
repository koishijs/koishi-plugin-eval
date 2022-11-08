import { defineConfig } from '@koishijs/vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'koishi-plugin-eval',
  description: '在 Koishi 中执行 JavaScript',

  head: [
    ['link', { rel: 'icon', href: 'https://koishi.chat/logo.png' }],
    ['link', { rel: 'manifest', href: 'https://koishi.chat/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#5546a3' }],
  ],

  themeConfig: {
    sidebar: [{
      text: '指南',
      items: [
        { text: '基本用法', link: '/' },
        { text: '扩展开发', link: '/addon.md' },
        { text: '配置项', link: '/config.md' },
      ],
    }, {
      text: 'API',
      items: [
        { text: '主线程 API', link: '/main.md' },
        { text: '主线程 API', link: '/worker.md' },
        { text: '沙箱 API', link: '/sandbox.md' },
      ],
    }, {
      text: '更多',
      items: [
        { text: 'Koishi 官网', link: 'https://koishi.chat' },
        { text: '支持作者', link: 'https://afdian.net/a/shigma' },
      ],
    }],
  },

  vite: {
    resolve: {
      dedupe: ['vue'],
    },
  },
})
