import { redirectPlugin } from "@vuepress/plugin-redirect"
import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress/cli"
import { viteBundler } from "@vuepress/bundler-vite"
import { sidebarZh, sidebarEn } from "./sidebar"

export default defineUserConfig({
    head: [
        ["link", { rel: "icon", href: "/docs/assets/favicon.ico" }],
    ],

    theme: defaultTheme({
        logo: "/favicon.ico",
        repo: "https://github.com/Jerry457/dont-starve-anim-tool-document",
        locales: {
            "/en/": {
                selectLanguageName: "English",
                sidebar: sidebarEn,
            },
            "/zh/": {
                // navbar
                selectLanguageName: "简体中文",
                selectLanguageText: "选择语言",
                selectLanguageAriaLabel: "选择语言",

                // sidebar
                sidebar: sidebarZh,

                // page meta
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdatedText: "上次更新",
                contributorsText: "贡献者",
                // custom containers
                tip: "提示",
                warning: "注意",
                danger: "警告",
                // 404 page
                notFound: ["这里什么都没有", "我们怎么到这来了？", "这是一个 404 页面", "看起来我们进入了错误的链接"],
                backToHome: "返回首页",
                // a11y
                openInNewWindow: "在新窗口打开",
                toggleColorMode: "切换颜色模式",
                toggleSidebar: "切换侧边栏",
            },
        },
    }),

    locales: {
        "/en/": {
            lang: "en-US",
            title: "dont-starve-anim-tool",
        },
        "/zh/": {
            lang: "zh-CN",
            title: "dont-starve-anim-tool",
        },
    },

    plugins: [[redirectPlugin({ autoLocale: true, })]],

    bundler: viteBundler(),

})
