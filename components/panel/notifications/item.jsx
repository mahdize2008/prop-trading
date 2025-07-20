import Text from "@/components/generic/text";

export default function NotificationsItem({ title, massage, data, time, isSeen }) {
  return (
    <li className="flex items-start py-4 border-b border-b-neutral-light last:border-b-0">
      <div className="ml-auto">
        <div className="flex items-start">
          <div className="w-1 h-3 bg-danger rounded-full ml-2 mt-1.5"></div>
          <Text
            size="base"
            className="ml-auto text-wrap mb-2"
            color={isSeen ? "dim-lighter" : "dim-dark"}
          >
            {title}
          </Text>
        </div>
        <Text
          size="xs"
          className="ml-auto"
          color={isSeen ? "dim-lighter" : "dim"}
        >
          {massage}
        </Text>
      </div>
      <div className="mr-5 mt-1">
        <Text
          size="xs"
          className="font-normal shrink-0 text-end mb-1"
          color={isSeen ? "dim-lighter" : "dim"}
        >
          {data}
        </Text>
        <Text
          size="xs"
          className="font-normal text-end"
          color={isSeen ? "dim-lighter" : "dim"}
        >
          {time}
        </Text>
      </div>
    </li>
  );
}
