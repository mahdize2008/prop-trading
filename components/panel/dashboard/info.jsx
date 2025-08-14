"use client"

import Btn from "@/components/generic/btn";
import Input from "@/components/generic/input";
import Text from "@/components/generic/text";
import StatWrap from "../widget/stat/wrap";
import toast, { Toaster } from "react-hot-toast";

export default function DashboardInfo({ code, link, statList }) {
  const copy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('کپی شد')
  };
  return (
    <>
    <div className="rounded-lg border border-neutral-light p-4">
      <div className="flex items-center mb-3">
        <Text weight="bold" size="sm">
          اطلاعات معرف
        </Text>
        <Text size="sm" className="mr-auto ml-3">
          کد شما : {code}
        </Text>
        <Btn variant="text" color="dim" onClick={() => copy(code)}>
          <i className="icon-copy"></i>
        </Btn>
      </div>
      <div className="flex items-start -m-2">
        <div className="w-1/2 flex">
          <StatWrap statList={statList} className="w-1/2 p-2" />
        </div>
        <div className="w-1/2 p-2">
          <Text size="sm" className="mb-2" weight="medium" color="dim-light">
            لینک معرفی شما:
          </Text>
          <div className="w-full flex items-center">
            <Input wrapClasses="grow" defaultValue={link} disabled />
            <Btn color="neutral-light" className="mr-2" as="div" onClick={() => copy(link)}>
              کپی لینک
            </Btn>
          </div>
        </div>
      </div>
    </div>
    <Toaster/>
    </>
  );
}
