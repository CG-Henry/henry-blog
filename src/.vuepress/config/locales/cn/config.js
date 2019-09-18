const ads = require('./ads');

module.exports = {
    languages: {
        label: '中文',
        shortname: '中文'
    },
    translation: {
        news_title: 'Receive our articles, videos and more directly in your inbox and stay up to date.',
        back: '返回',
        see_post: '查看',
        joined: '工作经验',
        title_404: '错误页面',
        text_404: '如果您单击的链接已关闭，我们对由此带来的不便深表歉意，但我们很容易解决，只需单击下面的按钮即可返回主页。我们在那儿见。',
        navigation: '导航',
        more_posts: '更多博文',
        turnon_night_mode: '关灯',
        turnoff_night_mode: '开灯',
        back_to_homepage: '返回主页',
        no_more_posts: '很快会有更多的文章',
        no_category_posts: '很快会有更多该分类的文章',
        all_posts_author: '博文作者',
        share: '分享',
        author: '作者',
        categories: '分类',
        path_route_categories: 'categories',
        path_route_posts: 'posts',
        path_route_authors: 'authors',
        path_route_contact: 'contact',
        path_route_about: 'about',
        path_route_privacy: 'privacy',
        path_route_search: 'contact',
        tags: '标签',
        title_contact: '联系方式',
        tip_contact: '***'
    },
    ads,
    logo: {
        name: 'blog/henry-blog-logo',
        ext: 'png',
        alt: 'Logo in 3 colors in play format'
    },
    share: {
        facebookCaption: '',
        twitterVia: ''
    },
    newsletter: {
        provider: 'mailchimp',
        action: ''
    },
    copy: `2018 © HenryCGH - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          MADE WITH VUEPRESS
        </a>`,
    footer: {
        nav1: {
            title: 'Henry Blog',
            items: [
                {
                    label: '关于我',
                    path: '/about/'
                },
                {
                    label: '分类',
                    path: '/categories/'
                },
                {
                    label: '联系方式',
                    path: '/contact/'
                }
            ]
        },
        nav2: {
            title: '社区',
            items: [
                {
                    label: '知乎',
                    link: 'https://www.zhihu.com/'
                }
            ]
        }
    },
    social: [
        {
            name: 'github',
            link: `https://github.com/HenryCGH`
        }
    ]
};
