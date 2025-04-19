import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "WebSites",

  description: "For stories, anime, bookmarks.",

  head: [
    // ['link', { rel: 'icon', href: '/public/favicon.ico', type: 'image/x-icon' }]
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
  ],

  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config

    // logo: '/public/img/logo.ico',
    logo: '/img/logo.ico',

    // siteTitle: false,

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Anime', link: '/weeks/' },
      { text: 'Course', link: '/course/'},
      { text: 'About', link: '/about/' }
    ],

    sidebar: {
      '/weeks/': [
        { text: 'Introduction', link: '/weeks/' },
        {
          text: 'Anime ',
          items: [
            { text: 'A-Monday', link: '/weeks/anime/Monday' },
            { text: 'A-Tuesday', link: '/weeks/anime/Tuesday' },
            { text: 'A-Wednesdays', link: '/weeks/anime/Wednesdays' },
            { text: 'A-Thursdays', link: '/weeks/anime/Thursdays' },
            { text: 'A-Fridays', link: '/weeks/anime/Fridays' },
            { text: 'A-Saturdays', link: '/weeks/anime/Saturdays' },
            { text: 'A-Sunday', link: '/weeks/anime/Sunday' }
          ]
        },
        {
          text: 'Manga',
          items: [
            { text: 'M-Monday', link: '/weeks/manga/Monday' },
            { text: 'M-Tuesday', link: '/weeks/manga/Tuesday' },
            { text: 'M-Wednesdays', link: '/weeks/manga/Wednesdays' },
            { text: 'M-Thursdays', link: '/weeks/manga/Thursdays' },
            { text: 'M-Fridays', link: '/weeks/manga/Fridays' },
            { text: 'M-Saturdays', link: '/weeks/manga/Saturdays' },
            { text: 'M-Sunday', link: '/weeks/manga/Sunday' }
          ]
        }
      ],
      '/bm/': [
        {
          text: 'Bookmarks',
          items: [
            { text: 'Introduction', link: '/bm/' },
            { text: 'Games', link: '/bm/Daily' },
            { text: 'Search Tools', link: '/bm/SearchTools' },
            { text: 'Online Tools', link: '/bm/OnlineTools' },
            { text: 'Github Star', link: '/bm/GithubStar' },
            { text: 'Others', link: '/bm/Others' }
          ]
        }
      ],
      '/course/': [
        { text: 'Introduction', link: '/course/' },
        {
          text: '洛克王国教程',
          items: [
            {text: '回归路线', link: '/course/roco/revert'},
            { text: '辅助篇', link: '/course/roco/fz' },
            { text: '功能介绍篇', link: '/course/roco/gn' },
            { text: 'Flash讲解', link: '/course/roco/flash' }
          ]
        },
        {
          text: '应用教程',
          items: [
            // { text: 'Oters', link: '' },
            // { text: 'Oters', link: '' }
          ]
        }
      ],
      '/about/': [
        {
          text: 'About',
          items: [
            { text: 'Concerning ', link: '/about/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xierkz' }
    ],

    footer: {
      message: 'Welcome to my web',
      copyright: 'Copyright © 2025 氵汐儿'
    }
  }
})
