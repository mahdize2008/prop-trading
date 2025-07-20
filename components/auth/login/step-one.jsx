import Card from "@/components/generic/card";
import AuthFooter from "../layout/footer";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";
import Link from "next/link";
import Text from "@/components/generic/text";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";

export default function LoginStepOne() {
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
          />
          <Input
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید"
            wrapClasses="w-full p-2"
          />
          <div className="p-2 w-full">
            <Btn
              variant="gradient"
              size="lg"
              className="w-full justify-center"
              icon="icon-left-arrow"
              iconPlace="left"
              as={Link}
              href="/"
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
