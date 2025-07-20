import Btn from "@/components/generic/btn";
import Input from "@/components/generic/input";
import SelectBox from "@/components/generic/select";
import Text from "@/components/generic/text";

export default function ProfileVerifySlideOne({ setSlide }) {
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
  
  return (
    <form>
      <div className="flex items-start -m-2 mb-8">
        <div className="w-1/2 p-2">
          <Input
            label="کد ملی"
            placeholder="کد ملی خود را وارد کنید"
            unit="دلار"
            wrapClasses="mb-3"
          />
          <Text color="dim-light" size="sm">
          کد ملی با تاریخ تولد باید مطابقت داشته باشد.
          </Text>
        </div>
        <SelectBox
          className="p-2 w-1/2"
          label={"تاریخ تولد"}
          options={options}
        />
      </div>
      <Btn
        variant="gradient"
        className="w-full justify-center"
        icon="icon-left-arrow"
        iconPlace="left"
        size="lg"
        as="div"
        onClick={setSlide}
      >
        مرحله بعدی
      </Btn>
    </form>
  );
}
