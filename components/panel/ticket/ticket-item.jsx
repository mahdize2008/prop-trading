import Chip from "@/components/generic/chip";
import Link from "next/link";

export default function TicketItem({id,number,text,date,status,status_text}) {
  return (
    <Link href={`/panel/ticket/${id}`} className="group flex items-center border-b border-b-neutral-light last:border-b-0 py-5">
      <div className="lg:text-sm text-xs text-dim-lighter font-medium ml-3">
        {number}
      </div>
      <div className="lg:text-base text-sm text-dim font-medium ml-auto group-hover:text-primary">
        {text}
      </div>
      <div className="lg:text-xs text-dim-light font-normal ml-6">
        {date}
      </div>
      <Chip color={status} variant="lightness">
        {status_text}
      </Chip>
    </Link>
  );
}
