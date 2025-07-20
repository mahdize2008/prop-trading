import Card from "@/components/generic/card";
import Text from "@/components/generic/text";
import clsx from "clsx";

export default function Stat({
  icon,
  name,
  amount,
  value,
  title = "",
  hasLeftIcon = false,
  color="neutral-dark"
}) {
  return (
    <Card color={color}>
      <div className="flex items-center mb-2">
        <div className="border border-neutral-light bg-neutral-dark w-10 h-10 rounded-2xl flex items-center justify-center ml-2">
          <i className={clsx(icon, "text-base text-dim-dark")}></i>
        </div>
        <Text color="dim-dark" size="sm">
          {name}
        </Text>
      </div>
      <div className="text-dim flex items-center justify-end">
        <Text size="sm" weight="bold" color="dim-dark">
          {value || amount}
        </Text>
        {title.length>0 && (
          <Text size="xs" weight="light" color="dim" className="mr-1">
            {title}
          </Text>
        )}
        {hasLeftIcon && <i className="icon-left1 text-sm text-dim-lighter mr-2"></i>}
      </div>
    </Card>
  );
}
