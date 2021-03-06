require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  title: 'Vue JSON Schema Form',
  description: 'Form Generator based on JSON Schema',
  base: '/vue-jsonschema-form/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    repo: 'roma219/vue-jsonschema-form',
    docsDir: 'docs',
    search: true,
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/examples/' }
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/guide/',
        collapsable: false,
        sidebarDepth: 1
      },
      {
        title: 'Examples',
        path: '/examples/'
      }
    ]
  },
  plugins: [
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // All options of ts-loader
        },
      }
    ]
  ],
  configureWebpack: (config) => {
    return { plugins: [
      new webpack.EnvironmentPlugin({ ...process.env })
    ]}
  }
}
