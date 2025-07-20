import Btn from "@/components/generic/btn";
import Text from "@/components/generic/text";

export default function ProfileVerifyStepThree({ setStep }) {
  return (
    <>
      <Text size="md" className="mb-6">
        ویدیوی سلفی
      </Text>
      <form>
        <div className="flex items-center justify-center w-48 h-48 rounded-full border-2 border-primary mb-4 mx-auto">
          <i className="icon-avatar1 text-9xl"></i>
        </div>
        <Btn color="neutral-light" className="px-16 mx-auto mb-10" size="sm">شروع ضبط</Btn>
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
    </>
  );
}
