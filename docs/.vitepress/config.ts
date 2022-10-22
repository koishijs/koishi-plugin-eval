import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'koishi-plugin-eval',
  description: '在 Koishi 中执行 JavaScript',

  themeConfig: {
    outline: [2, 3],
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
    }],
  },

  vite: {
    resolve: {
      dedupe: ['vue'],
    },
  },
})
