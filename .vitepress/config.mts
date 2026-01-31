import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "RedstoneCraft",
  description: "一个专业的红石生存服务器",
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
      { icon: 'QQ群聊', link: '1062961472' } // 或者换成 QQ 群链接
    ]
  }
})