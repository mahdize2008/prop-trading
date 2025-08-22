"use client";

import useInfoStore from "@/store/dashboard"

const SidebarData=()=>{
    const {infoStore}=useInfoStore()
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
            href : "/panel/challenges",
            chipTheme:"success",
            chip:infoStore.challenge_count
        },
        {
            name : "کیف پول",
            icon: "icon-side",
            href : "/panel/wallet",
            chipTheme:"success",
            chip:infoStore.Wallet_balance,
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
            href : "/panel/notifications",
            chipTheme:"danger",
            chip:infoStore.news_count
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