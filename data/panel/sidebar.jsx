const SidebarData=()=>{
    const menu=[
        {
            name : "داشبورد و پنل آنالیز",
            icon: "icon-side",
            href : "/panel"
        },
        {
            name : "خرید چالش جدید",
            icon: "icon-wallet",
            href : "/panel/buy-challenge"
        },
        {
            name : "چالش های من",
            icon: "icon-wallet",
            href : "/panel/challenges"
        },
        {
            name : "کیف پول",
            icon: "icon-side",
            href : "/panel/wallet",
            children:[
                {
                    name : "افزایش موجودی",
                    icon: "icon-add-circle",
                    href : "/panel/wallet/charge"
                },
                {
                    name : "تراکنش‌ها",
                    icon: "icon-copy",
                    href : "/panel/wallet/transactions"
                }
            ]
        },
        {
            name : "تیکت‌ها",
            icon: "icon-side",
            href : "/panel/ticket"
        },
        {
            name : "اعلان‌ها",
            icon: "icon-side",
            href : "/panel/notifications"
        },
        {
            name : "کسب درآمد",
            icon: "icon-side",
            href : "/panel/affilate"
        },
    ]
    return {menu}
}

export default SidebarData