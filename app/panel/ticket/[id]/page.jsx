"use client";

import Chip from "@/components/generic/chip";
import ChatWrap from "@/components/panel/generic/chat-wrap";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import { ticketRepliesData } from "@/services/tickets";
import setStatus from "@/utils/setStatus";
import { useEffect, useState } from "react";

export default function TicketItemDetails({ params }) {
  const [ticket, setTicket] = useState({});
  const [replies, setReplies] = useState({});

  const chipStatus = setStatus(ticket?.status);

  const fetch = async () => {
    const { id } = await params;

    const res = await ticketRepliesData(id);
    setTicket(res?.ticket);
    setReplies(res?.replies);
  };

  useEffect(() => {
    fetch();
  }, []);


  return (
    <>
      <PanelHeaderSection
        className="mb-6"
        leftSide={
          <Chip
            color={chipStatus.status}
            variant="lightness"
            className="mr-auto"
          >
            {chipStatus.status_text}
          </Chip>
        }
      >
        جزئیات تیکت شماره‌ی {ticket.id}
      </PanelHeaderSection>
      {replies?.length && <ChatWrap chats={replies} />}
    </>
  );
}
