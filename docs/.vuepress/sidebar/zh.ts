import { SidebarOptions } from '@vuepress/theme-default'

export const sidebarZh: SidebarOptions = {
    "/zh": [
        {
            text: "饥荒动画",
            collapsible: true,
            children: [
                {
                    text: "文件格式",
                    link: "/zh/anim-document/file-format.md",
                }
            ]
        },
        {
            text: "动画工具",
            link: "/zh/anim-tool/instructions.md",
            collapsible: true,
        },
        {
            text: "Spine",
            collapsible: true,
            children: [
                {
                    text: "介绍",
                    link: "/zh/index.md",
                },
                {
                    text: "使用须知",
                    link: "/zh/spine/instructions.md",
                },
                {
                    text: "格式规范",
                    link: "/zh/spine/spine-format.md",
                },
                {
                    text: "使用案例",
                    link: "/zh/spine/example.md",
                }
            ]
        },
    ],
}
