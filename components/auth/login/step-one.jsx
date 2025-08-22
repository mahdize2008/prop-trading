"use client";

import Card from "@/components/generic/card";
import AuthFooter from "../layout/footer";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";
import Link from "next/link";
import Text from "@/components/generic/text";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import { loginUser } from "@/services/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginStepOne() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const router=useRouter()

  async function submitForm(data) {
    try {
      setIsLoading(true);
      const res = await loginUser(data);
      toast.success(res.data.message);
      router.push('/panel');
    } catch (err) {
      console.error(err);
    }
    finally{
      setIsLoading(false);
    }
  }
  return (
    <>
      <Card color="neutral-dark" className="p-6 mb-4">
        <PanelHeaderSection border={false} shape className="mb-6">
          ورود به نئوپراپ
        </PanelHeaderSection>
        <form className="-m-2 flex flex-wrap mb-2">
          <Input
            label="ایمیل"
            placeholder="ایمیل خود را وارد کنید"
            wrapClasses="w-full p-2"
            {...register("username")}
          />
          <Input
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید"
            wrapClasses="w-full p-2"
            {...register("password")}
          />
          <div className="p-2 w-full">
            <Btn
              variant="gradient"
              size="lg"
              className="w-full justify-center"
              icon="icon-left-arrow"
              iconPlace="left"
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              onClick={handleSubmit(submitForm)}
            >
              ورود
            </Btn>
          </div>
        </form>
        <Text
          size="sm"
          color="dim-light"
          className="mb-6 block text-center hover:text-danger transition-all"
          as={Link}
          href="/forget"
        >
          فراموشی رمز عبور؟
        </Text>
        <Btn
          variant="outline"
          className="w-full justify-center"
          icon="icon-google"
          iconPlace="left"
        >
          ثبت نام با گوگل
        </Btn>
      </Card>
      <AuthFooter
        msg="در صورت نداشتن حساب کاربری، ابتدا ثبت نام کنید"
        btnLink="/register"
        btnText="ثبت نام در نئوپراپ"
        icon="icon-add-user"
      />
    </>
  );
}
