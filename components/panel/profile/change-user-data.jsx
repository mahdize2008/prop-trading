import Card from "@/components/generic/card";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";
import Link from "next/link";

export default function ProfileChangeUserData() {
  return (
    <div className="w-[630px] mx-auto">
      <Card color="neutral-dark" className="p-6">
      <div className="w-16 h-16 mb-6 mx-auto rounded-full border-2 border-neutral-light flex items-center justify-center relative after:content-['\e930'] after:font-['icomoon'] after:text-xs after:text-white after:flex after:items-center after:justify-center after:shrink-0 after:w-7 after:h-7 after:border-2 after:border-neutral-light after:absolute after:right-0 after:bottom-0 after:rounded-full after:translate-x-1/3 after:translate-y-1/3">
        <i className="icon-avatar text-white text-5xl"></i>
      </div>
        <form>
          <Input
            label="نام و نام خانوادگی"
            placeholder="احمدرضا عابد زاده"
            wrapClasses="mb-5"
            unit="دلار"
          />
          <Input
            label="نام کاربری"
            placeholder="مقدار دلاری شارژ مورد نظر"
            wrapClasses="mb-5"
            unit="دلار"
          />
          <Input
            label="ایمیل"
            placeholder="مقدار دلاری شارژ مورد نظر"
            wrapClasses="mb-5"
            unit="دلار"
          />
          <Btn
            variant="gradient"
            className="mr-auto"
            icon="icon-left-arrow"
            iconPlace="left"
            as={Link}
            href="/panel/wallet"
          >
            ذخیره
          </Btn>
        </form>
      </Card>
    </div>
  );
}
