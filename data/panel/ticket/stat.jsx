const ticketStatData = (ticket_count=[]) => {
  const statList = [
    {
      icon: "icon-ticket",
      name: "تیکت های پاسخ داده شده",
      value: ticket_count.find(item=>item.status==="answered")?.count || 0,
      title: "عدد",
      color:"neutral-dark",
    },
    {
      icon: "icon-ticket1",
      name: "تیکت های بسته شده",
      value: ticket_count.find(item=>item.status==="closed")?.count || 0,
      title: "عدد",
      color:"neutral-dark",
    },
    {
      icon: "icon-ticket",
      name: "تیکت‌های باز",
      value: ticket_count.find(item=>item.status==="open")?.count || 0,
      title: "عدد",
      color:"neutral-dark",
    },
    {
      icon: "icon-ticket1",
      name: "تیکت های در انتظار پاسخ",
      value: ticket_count.find(item=>item.status==="pending")?.count || 0,
      title: "عدد",
      color:"neutral-dark",
    },
  ];

  return { statList };
};

export default ticketStatData