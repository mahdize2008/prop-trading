import Text from "@/components/generic/text";

export default function NotificationsItem({ title }) {
  return (
    <li className="flex items-start py-4 border-b border-b-neutral-light last:border-b-0">
      <div className="w-1 h-3 bg-danger rounded-full ml-2 mt-1.5"></div>
      <Text size="base" className="ml-auto text-wrap mb-2" color="dim-dark">
        {title}
      </Text>
    </li>
  );
}
