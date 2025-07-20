import Card from "@/components/generic/card";
import AuthFooter from "../layout/footer";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";
import Link from "next/link";
import Text from "@/components/generic/text";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";

export default function ForgetStepOne({ setStep }) {
  return (
    <>
      <Card color="neutral-dark" className="p-6 mb-4">
        <PanelHeaderSection border={false} shape className="mb-6">
          بازیابی رمز عبور
        </PanelHeaderSection>
        <form className="-m-2 flex flex-wrap">
          <Input
            label="ایمیل"
            placeholder="ایمیل خود را وارد کنید"
            wrapClasses="w-full p-2"
          />
          <div className="p-2 w-full">
            <Btn
              variant="gradient"
              size="lg"
              className="w-full justify-center"
              icon="icon-left-arrow"
              iconPlace="left"
              onClick={()=> setStep('sendEmail')}
            >
              ارسال لینک بازیابی
            </Btn>
          </div>
        </form>
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
