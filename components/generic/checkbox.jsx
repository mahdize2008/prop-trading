"use client";

import clsx from "clsx";
import Text from "./text";

export default function Checkbox({ label, name, checked, onChange, className }) {
    return (
        <div className={clsx('group w-full cursor-pointer', { 'active': checked }, className)}>
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />
            <Text size="sm" as="label" htmlFor={name} className="flex items-center">
                <div
                    className="w-5 h-5 rounded-sm bg-dim-light border border-solid border-dim/10 text-xs flex items-center justify-center group-[&.active]:bg-primary group-[&.active]:border-primary/10 ml-2">
                    <i className="icon-tick  opacity-0 group-[&.active]:opacity-100 text-white"></i>
                </div>
                {label}
            </Text>
        </div>
    );
}