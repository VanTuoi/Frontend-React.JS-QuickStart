export const adminMenu = [
    { //quan ly nguoi dung
        name: 'menu.admin.overview',
        menus: [
            {
                name: 'menu.admin.overview', link: '/system/overview'
            },
        ]
    },
    { //quan ly nguoi dung
        name: 'menu.admin.user',
        menus: [
            {
                name: 'menu.admin.manage-user', link: '/system/user-manage'
            },
        ]
    },
    {   // quan ly san pham
        name: 'menu.admin.product',
        menus: [
            {
                name: 'menu.admin.manage-product', link: '/system/manage-product'
            },
        ]
    },
    {   // quan ly trang chu
        name: 'menu.admin.home-page',
        menus: [
            {
                name: 'menu.admin.manage-banner', link: '/system/manage-banner'
            },
            {
                name: 'menu.admin.manage-product-framework', link: '/system/manage-product-framework'
            }
        ]
    },
    {
        // quan ly khuyem mai
        name: 'menu.admin.promotion',
        menus: [
            {
                name: 'menu.admin.promotion-trademark', link: '/system/promotion-trademark'
            },
            {
                name: 'menu.admin.promotion-product', link: '/system/promotion-product'
            }
        ]
    },
    {
        // quan ly don hang
        name: 'menu.admin.manage-order',
        menus: [
            {
                name: 'menu.admin.approve-order', link: '/system/approve-order'
            },
            {
                name: 'menu.admin.look-up-order', link: '/system/look-up-order'
            }
        ]
    },
    {
        // quan ly nhap hang
        name: 'menu.admin.manage-import-goods',
        menus: [
            {
                name: 'menu.admin.import-goods', link: '/system/import-goods'
            },
            {
                name: 'menu.admin.look-up-goods', link: '/system/look-up-goods'
            }
        ]
    },
    {
        // quan ly doanh thu
        name: 'menu.admin.statistical',
        menus: [
            {
                name: 'menu.admin.sales-statistics', link: '/system/sales-statistics'
            }
        ]
    }
];