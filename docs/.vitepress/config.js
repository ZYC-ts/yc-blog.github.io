export default {
  title: "YCBlog", //站点标题
  description: "yc的博客", //用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "YCBlog",
    logo: "/robot.png",
    // 头部导航
    nav: [
      { text: "博客", link: "/articles/组件库环境搭建" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com/geeksdidi" },
      {
        text: "Drop Menu",
        items: [
          {
            text: "分组1",
            items: [
              { text: "Item A1", link: "/item-A1" },
              { text: "Item A2", link: "/item-A2" },
            ],
          },
          {
            text: "分组2",
            items: [
              { text: "Item B1", link: "/item-B1" },
              { text: "Item B2", link: "/item-B2" },
            ],
          },
        ],
      },
    ],
    // 链接
    socialLinks: [
      // | 'discord'| 'facebook'| 'github'| 'instagram'| 'linkedin'| 'slack'| 'twitter'| 'youtube'
      { icon: "github", link: "https://gitee.com/geeksdidi" },
      { icon: "twitter", link: "..." },
    ],
    // 侧边导航
    sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
        {
          text: "vue教程",
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
    },
  },
};
