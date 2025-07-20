"use client";

import clsx from "clsx";
import Text from "./text";
import Alert from "./alert";
import Btn from "./btn";
import { useState } from "react";

export default function Input({
  label,
  leftSide,
  rightSide,
  leftSideLabel,
  wrapClasses,
  showMsg = false,
  msgType = "danger",
  msg = null,
  defaultValue,
  amountList,
  unit,
  totalInventory,
  ...props
}) {
  const [value, setValue] = useState(defaultValue);

  const generateBorderColor = {
    danger: "!border-danger",
    info: "!border-info",
    success: "!border-success",
    warning: "!border-warning",
    primary: "!border-primary",
  };
  return (
    <div className={wrapClasses}>
      {(label?.length || leftSideLabel?.length) && (
        <div className="w-full mb-1.5 flex items-center">
          <Text
            as="label"
            size="sm"
            htmlFor=""
            color="dim-light"
            className="block"
          >
            {label}
          </Text>
          {leftSideLabel}
        </div>
      )}
      <div
        className={clsx(
          "w-full lg:h-11 h-10 border border-solid border-neutral-light rounded-base flex items-center focus-within:!border-primary/70",
          showMsg && generateBorderColor[msgType]
        )}
      >
        {rightSide && (
          <div className="pr-3 text-sm text-dim-lighter">{rightSide}</div>
        )}
        <input
          type="text"
          defaultValue={value}
          className="w-full h-full bg-transparent border-0 outline-none shadow-none px-3 text-primary placeholder:text-dim-lighter text-sm font-medium"
          {...props}
        />
        {leftSide && (
          <div className="pl-3 text-sm text-dim-lighter">{leftSide}</div>
        )}
      </div>
      {showMsg && (
        <Alert color={msgType} variant="text" className="mt-2">
          {msg}
        </Alert>
      )}
      {totalInventory&&
      <div className="flex items-center mt-3 justify-end">
        <Text size="sm" color="dim-dark">
          موجودی:{totalInventory} {unit}
        </Text>
        <Btn as="div" size="sm" color="neutral-light" className="mr-2" onClick={()=>setValue(totalInventory)}>
        انتخاب کل موجودی
        </Btn>
      </div>
      }
      <ul className="flex items-start justify-end flex-wrap -m-1 mt-2">
        {amountList?.length &&
          amountList.map((item, index) => (
            <li className="p-1" key={index}>
              <Btn
                color="neutral-light"
                size="sm"
                as="div"
                className="px-3"
                onClick={() => setValue(item)}
              >
                {item} {unit}
              </Btn>
            </li>
          ))}
      </ul>
    </div>
  );
}
