"use client";

import Text from "@/components/generic/text";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({ name, icon, href, childern }) {
    const pagePath = usePathname();
  return (
    <li className="mb-2 last:mb-0">
      <Link
        href={href}
        className={clsx(
          "flex items-center p-3 rounded-lg text-dim-light",
          { "border border-primary bg-primary-light": pagePath===href }
        )}
      >
        <i className={clsx(icon, "ml-3 text-sm")}></i>
        <Text size="sm" color="dim-light">
          {name}
        </Text>
      </Link>
      {childern?.length && (
        <ul className="border-r border-r-dim-lighter mr-5 mt-2">
          {childern.map((item, index) => (
            <li className="mb-2 last:mb-0" key={index}>
              <Link
                href={item.href}
                className={clsx(
                  "flex items-center p-3 rounded-lg rounded-r-none text-dim-light",
                  { "border border-primary bg-primary-light": pagePath===item.href }
                )}
              >
                <i className={clsx(item.icon, "ml-3 text-sm")}></i>
                <Text size="sm" color="dim-light">
                  {item.name}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
