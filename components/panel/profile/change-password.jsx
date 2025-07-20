import Card from "@/components/generic/card";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";
import Link from "next/link";

export default function ProfileChangePassword() {
  return (
    <div className="w-[630px] mx-auto">
      <Card color="neutral-dark" className="p-6">
        <form>
          <Input
            label="رمز عبور فعلی"
            placeholder="رمز عبور فعلی را وارد کنید"
            wrapClasses="mb-5"
            unit="دلار"
          />
          <Input
            label="رمز عبور جدید"
            placeholder="یک رمز عبور جدید بسازید"
            wrapClasses="mb-5"
            unit="دلار"
          />
          <Input
            label="تایید رمز عبور جدید"
            placeholder="رمز عبور جدید را دوباره وارد کنید"
            wrapClasses="mb-5"
            unit="دلار"
          />
          <Btn
            variant="gradient"
            className="mr-auto"
            icon="icon-left-arrow"
            iconPlace="left"
            as={Link}
            href="/panel/profile"
          >
            ذخیره
          </Btn>
        </form>
      </Card>
    </div>
  );
}
