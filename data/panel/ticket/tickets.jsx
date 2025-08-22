const ticketsListData = (ticketList) => {
  const tickets = ticketList.map((item) => {
    return {
      id: item.id,
      subject: item.subject,
      created_at: item.created_at,
      status: item.status,
    };
  });

  return { tickets };
};

export default ticketsListData;
