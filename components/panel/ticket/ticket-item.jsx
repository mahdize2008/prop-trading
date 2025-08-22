import Chip from "@/components/generic/chip";
import { convertToJalali } from "@/utils/convertToJalali";
import setStatus from "@/utils/setStatus";
import Link from "next/link";

export default function TicketItem({ id, created_at,subject, status }) {
  const chipStatus = setStatus(status);
  return (
    <Link
      href={`/panel/ticket/${id}`}
      className="group flex items-center border-b border-b-neutral-light last:border-b-0 py-5"
    >
      <div className="lg:text-sm text-xs text-dim-lighter font-medium ml-3">
        {id}
      </div>
      <div className="lg:text-base text-sm text-dim font-medium ml-auto group-hover:text-primary">
        {subject}
      </div>
      <div className="lg:text-xs text-dim-light font-normal ml-6">
        {convertToJalali(created_at)}
      </div>
      <Chip color={chipStatus.status} variant="lightness">
        {chipStatus.status_text}
      </Chip>
    </Link>
  );
}
