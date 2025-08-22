import Card from "@/components/generic/card";
import Text from "@/components/generic/text";
import { convertToJalali } from "@/utils/convertToJalali";
import clsx from "clsx";

export default function Chat({ is_admin, name, message, created_at }) {
  return (
    <Card
      className={clsx(
        "sm:w-[70%] mb-4 last:mb-0",
        is_admin === "admin" ? "mr-auto rounded-tl-none" : "rounded-br-none"
      )}
      color={is_admin === "admin" ? "primary" : "neutral"}
    >
      <div className="flex items-start">
        <div className="ml-auto">
          <Text size="lg" className="ml-auto text-wrap mb-3">
            {name}
          </Text>
          <Text size="sm" className="ml-auto" color="dim-dark">
            {message}
          </Text>
        </div>
        <div className="mr-5 mt-1">
          <Text size="sm" className="font-normal shrink-0 text-end mb-3">
            {convertToJalali(created_at)}
          </Text>
        </div>
      </div>
    </Card>
  );
}
