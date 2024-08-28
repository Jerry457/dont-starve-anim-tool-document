import { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn: SidebarOptions = {
    "/en": [
        {
            text: "Anim Tool",
            collapsible: true,
            children: [
                {
                    text: "Introduce",
                    link: "/en/anim-tool/introduce.md",
                },
                {
                    text: "Guide",
                    link: "/en/anim-tool/guide.md",
                },
            ]
        },
        {
            text: "Spine Tool",
            collapsible: true,
            children: [
                {
                    text: "Introduce",
                    link: "/en/spine/introduce.md",
                },
                {
                    text: "Instructions",
                    link: "/en/spine/instructions.md",
                },
                {
                    text: "Support",
                    link: "/en/spine/support.md",
                },
                {
                    text: "Format",
                    link: "/en/spine/format.md",
                },
                {
                    text: "Export Import",
                    link: "/en/spine/export-import.md",
                },
                {
                    text: "Problem Solving",
                    link: "/en/spine/problem-solving.md",
                },
                {
                    text: "Examples",
                    link: "/en/spine/example.md",
                }
            ]
        },
        // {
        //     text: "饥荒动画格式",
        //     collapsible: true,
        //     children: [
        //         {
        //             text: "文件格式",
        //             link: "/en/anim-document/format.md",
        //         }
        //     ]
        // },
    ],
}
