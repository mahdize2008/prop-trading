import Btn from "@/components/generic/btn";
import Card from "@/components/generic/card";
import Heading from "@/components/generic/heading";
import Text from "@/components/generic/text";
import clsx from "clsx";
import Link from "next/link";

export default function StatWallet({
  icon,
  title,
  name,
  amount,
  color = "neutral-dark",
  btn_text,
  btn_href,
  className,
  ...props
}) {
  const circleTheme={
    "neutral-dark":"border border-neutral-light text-dim-dark",
    success:"border border-success-dark text-success",
    danger:"border border-danger-dark text-danger",
    info:"border border-info-dark text-info",
    warning:"border border-warning-dark text-warning",
    primary:"border border-primary-dark text-primary",
  }
  return (
    <Card
      color={color}
      className={clsx("h-full flex flex-col justify-between p-5",className)}
      {...props}
    >
      <div>
        {title&&
        <Heading variant="h6" className="mb-2.5">
          {title}
        </Heading>
        }
        <div className="flex items-center">
          <div className={clsx("border border-neutral-light text-dim-dark w-10 h-10 rounded-full flex items-center justify-center ml-3",circleTheme[color])}>
            <i className={clsx(icon,"text-lg")}></i>
          </div>
          <div>
            <Text color="success" size="xl">
              {amount}
            </Text>
            <Text color="dim" size="xs">
              {name}
            </Text>
          </div>
        </div>
      </div>
      {btn_text&&btn_href&&
      <Btn
        icon="icon-left-arrow"
        iconPlace="left"
        color="neutral-light"
        className="w-full justify-center mt-4"
        as={Link}
        href={btn_href}
      >
        {btn_text}
      </Btn>
      }
    </Card>
  );
}
