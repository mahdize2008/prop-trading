import Card from "@/components/generic/card";
import AuthFooter from "../layout/footer";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";
import Link from "next/link";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";

export default function RegisterStepOne({setStep}) {
  return (
    <>
      <Card color="neutral-dark" className="p-6 mb-4">
        <PanelHeaderSection border={false} shape className="mb-6">
          ثبت نام در نئوپراپ
        </PanelHeaderSection>
        <form className="-m-2 flex flex-wrap mb-2">
          <Input label="ایمیل" placeholder="ایمیل" wrapClasses="w-1/2 p-2" />
          <Input
            label="کد معرف (اختیاری)"
            placeholder="کد معرف (اختیاری)"
            wrapClasses="w-1/2 p-2"
          />
          <Input
            label="رمز عبور"
            placeholder="رمز عبور"
            wrapClasses="w-1/2 p-2"
          />
          <Input
            label="تایید رمز عبور"
            placeholder="تایید رمز عبور"
            wrapClasses="w-1/2 p-2"
          />
          <div className="p-2 w-full">
            <Btn
              variant="gradient"
              size="lg"
              className="w-full justify-center"
              icon="icon-left-arrow"
              iconPlace="left"
              onClick={()=>setStep()}
            >
              ثبت نام
            </Btn>
          </div>
        </form>
        <div className="text-dim-lighter text-xs text-center mb-4">
          ثبت نام به منزله‌ی قبول{" "}
          <Link href="/" className="underline text-dim-dark">
            قوانین و مقررات
          </Link>{" "}
          است.
        </div>
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
        msg="در صورت داشتن حساب کاربری، ورود کنید"
        btnLink="/login"
        btnText="ورود به پنل کاربری"
        icon="icon-logout"
      />
    </>
  );
}
