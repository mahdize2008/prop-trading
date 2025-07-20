import Btn from "@/components/generic/btn";
import Text from "@/components/generic/text";

export default function ProfileVerifySlideTwo({ setStep }) {
  return (
    <form>
      <input type="file" className="hidden" id="chooseFile" />
        <label
          htmlFor="chooseFile"
          icon="icon-upload"
          variant="outline"
          className="block cursor-pointer text-center py-8 rounded-base border-2 border-neutral-light mb-10"
          size="sm"
        >
          <i className="icon-download text-2xl mb-4"></i>
          <Text size="sm" >
          بارگذاری تصویر کارت‌ملی
          </Text>
        </label>
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
