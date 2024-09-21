import { defineConfig } from 'vitepress'
import  nav  from './nav.mts'
import  sidebar  from './sidebar.mts'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "我的记忆网站",
  description: "一个基于vitepress创建的静态网站",
  head: [
    ['link', {
        rel: 'icon',
        href: '/favicon.ico'
        }
    ]
//     ['script', { src: '/global.js' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/Gdge.svg',

    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xierkz' },
//       {
//         icon: {
//           svg: ''
//         },
//         link: ''
//       }
    ]
  }
})
