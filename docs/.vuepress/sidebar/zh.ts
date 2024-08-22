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
            collapsible: true,
            children: [
                {
                    text: "导出",
                    link: "/zh/anim-tool/export.md",
                },
            ]
        },
        {
            text: "Spine工具",
            collapsible: true,
            children: [
                {
                    text: "介绍",
                    link: "/zh/spine/introduce.md",
                },
                {
                    text: "支持",
                    link: "/zh/spine/support.md",
                },
                {
                    text: "使用须知",
                    link: "/zh/spine/instructions.md",
                },
                {
                    text: "格式规范",
                    link: "/zh/spine/format.md",
                },
                {
                    text: "导入导出",
                    link: "/zh/spine/export-import.md",
                },
                {
                    text: "常见问题",
                    link: "/zh/spine/errors.md",
                },
                {
                    text: "使用案例",
                    link: "/zh/spine/example.md",
                }
            ]
        },
    ],
}
