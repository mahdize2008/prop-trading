import Btn from "@/components/generic/btn";
import Input from "@/components/generic/input";
import SelectBox from "@/components/generic/select";
import Textarea from "@/components/generic/textarea";

export default function TicketCreateForm() {
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
  const options2 = [
    {
      value: 0,
      label: "پشتیبانی عمومی",
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
  const options3 = [
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
    <form className="flex items-center flex-wrap -m-2">
      <Input
        label="موضوع تیکت"
        placeholder="موضوع تیکت خود را وارد کنید"
        wrapClasses="w-1/2 p-2"
      />
      <SelectBox
        label={"اکانت مرحله یک (اختیاری)"}
        options={options}
        className="w-1/2 p-2"
      />
      <SelectBox label={"بخش"} options={options2} className="w-1/2 p-2" />
      <SelectBox
        label={"اکانت ریل یا مرحله دو(اختیاری)"}
        options={options3}
        className="w-1/2 p-2"
      />
      <Textarea
        label="توضیحات"
        placeholder="توضیحات تیکت خودرا اینجا بنویسید."
        wrapClasses="w-full p-2"
      />
      <div className="w-full p-2">
        <input type="file" className="hidden" id="chooseFile" />
        <div className="flex items-center justify-center rounded-base border border-neutral-light py-14">
          <Btn
            as="label"
            htmlFor="chooseFile"
            icon="icon-upload"
            variant="outline"
            className="cursor-pointer"
            size="sm"
          >
            برای بارگزاری فایل کلیک کنید
          </Btn>
        </div>
      </div>
      <div className="p-2 mr-auto">
        <Btn
          type="submit"
          icon="icon-left-arrow"
          iconPlace="left"
          variant="gradient"
          className="cursor-pointer"
        >
          ارسال تیکت
        </Btn>
      </div>
    </form>
  );
}
