import Chip from "@/components/generic/chip";
import ChatWrap from "@/components/panel/generic/chat-wrap";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import ticketMockData from "@/data/panel/ticket/ticket-mock";

export default function TicketItemDetails() {
  const { ticketMock } = ticketMockData();
  
  return (
    <>
      <PanelHeaderSection
        className="mb-6"
        leftSide={
          <Chip
            color={ticketMock.status}
            variant="lightness"
            className="mr-auto"
          >
            {ticketMock.status_text}
          </Chip>
        }
      >
        جزئیات تیکت شماره‌ی {ticketMock.number}
      </PanelHeaderSection>
      <ChatWrap chats={ticketMock.chats}/>
    </>
  );
}
