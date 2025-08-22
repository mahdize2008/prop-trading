"use client"

import Logo from "@/components/generic/logo";
import SidebarData from "@/data/panel/sidebar";
import SidebarItem from "./sidebarItem";
import Link from "next/link";
import Btn from "@/components/generic/btn";
import Text from "@/components/generic/text";
import Chip from "@/components/generic/chip";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import useInfoStore from "@/store/dashboard";

export default function PanelSidebar({className=""}) {
  const { menu } = SidebarData();
  const pagePath = usePathname();
  const {infoStore}=useInfoStore()

  return (
    <div className={clsx( className,"w-[300px] py-6 flex flex-col justify-between shrink-0")}>
      <div>
        <Logo className="mb-10" />
        <ul className="mb-6">
          {menu.map((item, index) => (
            <SidebarItem
              key={index}
              name={item.name}
              href={item.href}
              icon={item.icon}
              chip={item?.chip}
              chipTheme={item?.chipTheme}
              childern={item?.children}
            />
          ))}
        </ul>
        <Btn
          as={Link}
          href="/"
          icon="icon-chart"
          variant="lightness"
          color="primary"
          className="mb-8 w-full"
        >
          نفرات برتر
        </Btn>
      </div>
      <Link href="/panel/profile" className={clsx(pagePath==="/panel/profile"&&"bg-neutral p-2","flex items-center rounded-lg")}>
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-light ml-3">
          <i className="icon-avatar text-primary text-md"></i>
        </div>
        <Text size="sm" color="primary" className="ml-4">
          حساب کاربری
        </Text>
        {
          infoStore.verify?
        <Chip size="sm" color="success" variant="lightness">
          احراز شده
        </Chip>
        :
        <Chip size="sm" color="danger" variant="lightness">
          احراز نشده
        </Chip>
        }
        <i className="icon-left1 text-primary text-md mr-auto"></i>
      </Link>
    </div>
  );
}
