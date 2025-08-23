"use client"

import Card from "@/components/generic/card";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";
import { useForm } from "react-hook-form";

export default function ProfileChangePassword() {
  const { register, handleSubmit } = useForm();

  function changePassword(data){
    console.log(data);
  }
  return (
    <div className="w-[630px] mx-auto">
      <Card color="neutral-dark" className="p-6">
        <form>
          <Input
            label="رمز عبور فعلی"
            placeholder="رمز عبور فعلی را وارد کنید"
            wrapClasses="mb-5"
            {...register('password')}
          />
          <Input
            label="رمز عبور جدید"
            placeholder="یک رمز عبور جدید بسازید"
            wrapClasses="mb-5"
            {...register('new_password')}
          />
          <Input
            label="تایید رمز عبور جدید"
            placeholder="رمز عبور جدید را دوباره وارد کنید"
            wrapClasses="mb-5"
            {...register('repeat_new_password')}
          />
          <Btn
            variant="gradient"
            className="mr-auto"
            icon="icon-left-arrow"
            iconPlace="left"
            onClick={handleSubmit(changePassword)} 
          >
            ذخیره
          </Btn>
        </form>
      </Card>
    </div>
  );
}
