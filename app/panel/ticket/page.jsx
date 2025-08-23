"use client";

import Pagination from "@/components/generic/pagination";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import TicketItem from "@/components/panel/ticket/ticket-item";
import StatWrap from "@/components/panel/widget/stat/wrap";
import ticketStatData from "@/data/panel/ticket/stat";
import ticketsListData from "@/data/panel/ticket/tickets";
import { ticketsData } from "@/services/tickets";
import useInfoStore from "@/store/dashboard";
import { useEffect, useState } from "react";

export default function ticket() {
  const [ticketslist,setTicketslist]=useState([])
  const [pagination,setPagination]=useState([])
  const { infoStore } = useInfoStore();
  const { statList } = ticketStatData(infoStore.ticket_count);
  const { tickets } = ticketsListData(ticketslist);

  const fetch = async (page=1,limit=10) => {
    try{      
      const {list , pagination} = await ticketsData({page,limit});
      setTicketslist(list)
      setPagination(pagination)
    }catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  
  return (
    <>
      <div className="flex -m-1.5 mb-20">
        <StatWrap className="p-1.5 w-1/3" statList={statList}></StatWrap>
      </div>
      <PanelHeaderSection>آخرین تیکت ها</PanelHeaderSection>
      {tickets.map((item, index) => (
        <TicketItem
          key={index}
          id={item.id}
          created_at={item.created_at}
          subject={item.subject}
          status={item.status}
        />
      ))}
      {
        pagination.total>1&&
      <Pagination total={pagination.total} reFetch={fetch} current={pagination.current} className="mt-4"/>
      }
    </>
  );
}
