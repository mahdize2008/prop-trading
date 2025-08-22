"use client";

import clsx from "clsx";
import { useState } from "react";

export default function Tabs({
  tabs = [],
  renderCell,
  changeTab,
  wrapclass,
  className,
}) {
  const [activeItem, setActiveItem] = useState(tabs[0].id);

  const onChangeTab = (id) => {
    setActiveItem(id);
    changeTab(id);
  };


  return (
    <ul className={wrapclass}>
      {tabs.length &&
        tabs.map((item, index) => (
          <li
            onClick={() => onChangeTab(item.id)}
            key={index}
            className={clsx(
              className,
              { active: item.id === activeItem },
              "group cursor-pointer transition-all"
            )}
          >
            {renderCell(item)}
          </li>
        ))}
    </ul>
  );
}
