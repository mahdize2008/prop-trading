"use client";

import Card from "@/components/generic/card";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";
import Link from "next/link";
import useDashboardStore from "@/store/dashboard";
import { useForm } from "react-hook-form";

export default function ProfileChangeUserData() {
  const { register, handleSubmit } = useForm();
  const { dashboardstore } = useDashboardStore();

  function changeData(data){
    console.log(data);
  }

  return (
    <div className="w-[630px] mx-auto">
      <Card color="neutral-dark" className="p-6">
        <div className="w-16 h-16 mb-6 mx-auto rounded-full border-2 border-neutral-light flex items-center justify-center relative after:content-['\e930'] after:font-['icomoon'] after:text-xs after:text-white after:flex after:items-center after:justify-center after:shrink-0 after:w-7 after:h-7 after:border-2 after:border-neutral-light after:absolute after:right-0 after:bottom-0 after:rounded-full after:translate-x-1/3 after:translate-y-1/3">
          <i className="icon-avatar text-white text-5xl"></i>
        </div>
        <form>
          <Input
            label="نام و نام خانوادگی"
            defaultValue={dashboardstore?.user?.full_name}
            wrapClasses="mb-5"
            {...register("full_name")}
          />
          <Input
            label="نام کاربری"
            defaultValue={dashboardstore?.user?.username}
            wrapClasses="mb-5"
            {...register("username")}
          />
          <Input
            label="ایمیل"
            defaultValue={dashboardstore?.user?.email}
            wrapClasses="mb-5"
            {...register("email")}
          />
          <Btn
            variant="gradient"
            className="mr-auto"
            icon="icon-left-arrow"
            iconPlace="left"
            onClick={handleSubmit(changeData)}
          >
            ذخیره
          </Btn>
        </form>
      </Card>
    </div>
  );
}
