import Btn from "@/components/generic/btn";
import Input from "@/components/generic/input";

export default function ProfileVerifyStepOne({ setStep }) {
  return (
    <form>
      <div className="flex items-start -m-2 mb-8">
        <Input
          label="نام"
          placeholder="نام خود را وارد کنید"
          wrapClasses="w-1/2 p-2"
          unit="دلار"
        />
        <Input
          label="نام خانوادگی"
          placeholder="نام‌خانوادگی خود را وارد کنید"
          wrapClasses="w-1/2 p-2"
          unit="دلار"
        />
      </div>
        <Btn
          variant="gradient"
          className="w-full justify-center"
          icon="icon-left-arrow"
          iconPlace="left"
          size="lg"
          as="div"
          onClick={setStep}
        >
          مرحله بعدی
        </Btn>
    </form>
  );
}
