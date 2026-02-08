import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/",
  title: "名字没想好",
  description: "一个邦多利社区服",
    // 关键配置：确保静态资源处理
  vite: {
    publicDir: 'public',
    build: {
      copyPublicDir: true,
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.')
            const ext = info[info.length - 1]
            if (/png|jpe?g|gif|svg/i.test(ext)) {
              return `assets/images/[name]-[hash][extname]`
            }
            return `assets/[name]-[hash][extname]`
          }
        }
      }
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/rules' },
      { text: '卫星地图', link: 'http://map.yourserver.com' } // 如果你有 Dynmap/BlueMap
    ],

    sidebar: [
      {
        text: '玩家指南',
        items: [
          { text: '服务器规则', link: '/guide/rules' },
          { text: '如何加入', link: '/guide/join' }
        ]
      },
      {
        text: '技术文档',
        items: [
          { text: '红石限制说明', link: '/guide/redstone-limits' },
          { text: '允许的客户端模组', link: '/guide/allowed-mods' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourname/server-docs' },
      { icon: 'QQ群', link: 'https://qm.qq.com/q/mjQzjc7Udi' } // 或者换成 QQ 群链接
    ]
  }
})