import Card from "@/components/generic/card";
import Heading from "@/components/generic/heading";
import Text from "@/components/generic/text";
import clsx from "clsx";
import Link from "next/link";

export default function StatLink({
  icon,
  title,
  text,
  children,
  hasLeftIcon = false,
  color = "neutral-dark",
  href="/",
  component = Link,
  leftSide,
  ...props
}) {
  return (
    <Card as={component} href={href} color={color} {...props}>
      <div className="flex items-center">
        <div className="border border-neutral-light w-10 h-10 rounded-full flex items-center justify-center ml-2">
          <i className={clsx(icon, "text-sm text-dim-dark")}></i>
        </div>
        <Heading color="dim-dark" variant="h6" weight="medium">
          {title}
        </Heading>
        {hasLeftIcon && (
          <i className="icon-left1 text-sm text-dim-lighter mr-auto"></i>
        )}
        {leftSide}
      </div>
      {text?.length&&
      <Text size="sm" color="dim-dark" className="mt-4">
        {text}
      </Text>
      }
      {children}
    </Card>
  );
}
