import Card from "@/components/generic/card";
import AuthFooter from "../layout/footer";
import PanelHeaderSection from "@/components/generic/panel-header-section";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";

export default function RegisterSetNewPassword({ setStep }) {
  return (
    <>
      <Card color="neutral-dark" className="p-6 mb-4">
        <PanelHeaderSection border={false} shape className="mb-6">
          ثبت نام در نئوپراپ
        </PanelHeaderSection>
        <form className="-m-2 flex flex-wrap">
          <Input
            label="رمز عبور جدید"
            placeholder="رمز عبور جدیدی بسازید"
            wrapClasses="w-full p-2"
          />
          <Input
            label="تایید رمز عبور جدید"
            placeholder="رمز عبور جدید را دوباره وارد کنید"
            wrapClasses="w-full p-2"
          />
          <div className="p-2 w-full">
            <Btn
              variant="gradient"
              size="lg"
              className="w-full justify-center"
              icon="icon-check-circle"
              iconPlace="left"
              onClick={() => setStep()}
            >
              ذخیره
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
