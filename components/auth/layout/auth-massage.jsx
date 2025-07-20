import Btn from "@/components/generic/btn";
import Card from "@/components/generic/card";
import Heading from "@/components/generic/heading";
import Text from "@/components/generic/text";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import clsx from "clsx";
import Link from "next/link";

export default function AuthMassage({
  msg,
  text,
  headerTitle,
  btnText,
  btnLink,
  btnIcon,
  icon,
}) {
  return (
    <Card color="neutral-dark" className="p-6">
      <PanelHeaderSection border={false} shape className="mb-12">
        {headerTitle}
      </PanelHeaderSection>
      <div className="flex items-center justify-center border-primary-light border-2 w-36 h-36 rounded-full mx-auto mb-8">
        <i className={clsx(icon,'text-20xl text-success')}></i>
      </div>
      <Heading variant="h4" color="dim" className="text-center mb-5">
        {msg}
      </Heading>
      <Text size="sm" color="dim-light" className="text-center mb-12">
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
    </Card>
  );
}
