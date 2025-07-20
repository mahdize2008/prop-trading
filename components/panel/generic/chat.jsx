import Card from "@/components/generic/card";
import Text from "@/components/generic/text";
import clsx from "clsx";

export default function Chat({ author, name, massage, data, time }) {
  return (
    <Card
      className={clsx(
        "sm:w-[70%] mb-4 last:mb-0",
        author === "admin" ? "mr-auto rounded-tl-none" : "rounded-br-none"
      )}
      color={author === "admin" ? "primary" : "neutral"}
    >
      <div className="flex items-start">
        <div className="ml-auto">
          <Text size="lg" className="ml-auto text-wrap mb-3">
            {name}
          </Text>
          <Text size="sm" className="ml-auto" color="dim-dark">
            {massage}
          </Text>
        </div>
        <div className="mr-5 mt-1">
          <Text size="sm" className="font-normal shrink-0 text-end mb-3">
            {data}
          </Text>
          <Text size="sm" className="font-normal text-end">
            {time}
          </Text>
        </div>
      </div>
    </Card>
  );
}
