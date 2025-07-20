import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import TicketCreateForm from "@/data/panel/ticket/create-form";

export default function createTicket() {
  return (
    <>
      <PanelHeaderSection className="mb-6">ساخت تیکت</PanelHeaderSection>
      <TicketCreateForm/>
    </>
  );
}
