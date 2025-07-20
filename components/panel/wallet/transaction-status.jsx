"use client";

import Card from "@/components/generic/card";
import Heading from "@/components/generic/heading";
import Text from "@/components/generic/text";
import Btn from "@/components/generic/btn";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function TransactionStatus({
  msg,
  amount,
  btnText,
  btnLink = "",
  btnIcon,
  details,
  icon,
  iconTheme = "success",
  TransactionHash,
  hasRedirectTimer = false,
  children,
}) {
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const tiemrInterval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      clearInterval(tiemrInterval);
      redirect("/panel/wallet");
    }
  }, [hasRedirectTimer === true]);
  const theme = {
    success: "text-success",
    danger: "text-danger",
  };
  return (
    <>
      <Card color="neutral-dark" className="p-6">
        <div className="flex items-center justify-center border-primary-light border-2 w-20 h-20 rounded-full mx-auto mb-8">
          <i className={clsx(icon, "text-12xl", theme[iconTheme])}></i>
        </div>
        <Heading variant="h6" color="dim" className="text-center mb-5">
          {msg}
        </Heading>
        <Heading variant="h1" color="dim" className="text-center mb-14">
          {amount}$
        </Heading>
        <div className="w-[330px] mx-auto">
          <ul className="mb-4">
            {details.map((item, index) => (
              <li
                className="flex items-center text-dim-lighter text-xs mb-4 last:mb-0"
                key={index}
              >
                {item.title}
                <Text className="mr-auto" size="sm">
                  {item.value}
                </Text>
              </li>
            ))}
          </ul>
          <Btn
            icon="icon-copy1"
            iconPlace="left"
            color="neutral-light"
            size="xs"
            className="w-full justify-center mb-8"
            onClick={() => navigator.clipboard.writeText(TransactionHash)}
          >
            کپی هش تراکنش
          </Btn>
          {hasRedirectTimer && (
            <Text size="xs" color="dim-dark" className="text-center mb-8">
              بازگشت خودکار تا <span className="text-primary">{timer}</span>{" "}
              ثانیه...
            </Text>
          )}
          <Btn
            as={Link}
            color="primary"
            icon={btnIcon}
            iconPlace="left"
            href={btnLink}
            size="lg"
            className="w-full justify-center"
          >
            {btnText}
          </Btn>
        </div>
      </Card>
      {children}
    </>
  );
}
