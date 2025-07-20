import Btn from "@/components/generic/btn";
import Heading from "@/components/generic/heading";
import Text from "@/components/generic/text";
import clsx from "clsx";
import Link from "next/link";

export default function ProfileVerifyStepFour({ icon,msg,text,btnIcon,btnLink,btnText,iconTheme="success" }) {
  const theme = {
    success: "text-success",
    danger: "text-danger",
  };
  return (
    <>
      <div className="flex items-center justify-center border-primary-light border-2 w-36 h-36 rounded-full mx-auto mb-8">
        <i className={clsx(icon,theme[iconTheme], "text-20xl")}></i>
      </div>
      <Heading variant="h4" color="dim" className="text-center mb-5">
        {msg}
      </Heading>
      <Text size="sm" color="dim-light" className="text-center mb-10">
        {text}
      </Text>
      <Btn
        as={Link}
        color="primary"
        icon={btnIcon}
        iconPlace="left"
        href={btnLink}
        size="lg"
        className="w-full justify-center"
      >
        {btnText}
      </Btn>
    </>
  );
}
