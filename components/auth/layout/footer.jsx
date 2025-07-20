import Btn from "@/components/generic/btn";
import Card from "@/components/generic/card";
import Text from "@/components/generic/text";
import Link from "next/link";

export default function AuthFooter({ msg, btnText, btnLink, icon }) {
  return (
    <Card color="neutral-dark" className="p-6">
      <Text size="sm" color="dim-light" className="text-center mb-4">
        {msg}
      </Text>
      <Btn
        as={Link}
        color="neutral-light"
        icon={icon}
        iconPlace="left"
        href={btnLink}
        className="w-full justify-center"
      >
        {btnText}
      </Btn>
    </Card>
  );
}
