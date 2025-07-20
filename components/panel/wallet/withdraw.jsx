import Card from "@/components/generic/card";
import PanelHeaderSection from "../generic/panel-header-section";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";
import Text from "@/components/generic/text";
import SelectBox from "@/components/generic/select";
import Link from "next/link";

export default function Withdraw() {
  const options = [
    {
      value: 0,
      label: "تست ۱",
    },
    {
      value: 1,
      label: "تست ۲",
    },
    {
      value: 2,
      label: "تست ۳",
    },
    {
      value: 3,
      label: "تست ۴",
    },
  ];
  const totalInventory=120
  return (
    <div className="w-[630px] mx-auto">
      <Card color="neutral-dark">
        <form>
          <Input
            label="مبلغ (به دلار)"
            placeholder="مقدار دلاری شارژ مورد نظر"
            wrapClasses="mb-7"
            unit="دلار"
            totalInventory={totalInventory}
          />
          <div className="flex items-start -m-2 mb-4">
            <SelectBox
              className="p-2 w-[30%]"
              options={options}
              label="انتخاب شبکه"
            />
            <Input
              label="آدرس ولت "
              placeholder="آدرس ولت  را وارد کنید"
              wrapClasses="p-2 w-[70%]"
            />
          </div>
          <Btn
            color="neutral-light"
            className="w-full justify-center mb-7"
            icon="icon-google"
            iconPlace="left"
          >
            احراز هویت گوگلی
          </Btn>
          <Btn
            variant="gradient"
            className="mr-auto"
            icon="icon-left-arrow"
            iconPlace="left"
            as={Link}
            href="/panel/wallet"
          >
            ثبت برداشت
          </Btn>
        </form>
      </Card>
    </div>
  );
}
