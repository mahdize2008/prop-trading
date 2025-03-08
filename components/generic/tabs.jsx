"use client"
import clsx from "clsx";
import { useState } from "react";
import Text from "./text";

export default function Tabs({ tabs = [], changeTab, className }) {
    const [indexActive, SetIndexActive] = useState(0)

    function onChangeTabHandler(index) {
        SetIndexActive(index)
        changeTab(tabs[index].value)
    }
    return (
        <ul className={clsx('w-full border-b border-solid border-neutral-dark flex items-center', className )}>
            {
                tabs.map((item, index) => (
                    <li key={index} className={clsx(
                        'px-[1px] lg:py-2 pb-2 grow text-center cursor-pointer whitespace-nowrap border-b-2 border-solid border-transparent',
                        { '!border-primary': indexActive === index }
                                            )}
                        onClick={() => onChangeTabHandler(index)}
                    >
                        <Text color={indexActive === index ? 'primary' : 'dim'}>
                            {item.label}
                        </Text>
                    </li>
                ))
            }
        </ul>
    )
}