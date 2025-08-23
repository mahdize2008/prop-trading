const affilateTableData = (list) => {
  const tableColumns = [
    {
      key: "line",
      label: "ردیف",
    },
    {
      key: "email",
      label: "ایمیل",
    },
    {
      key: "history",
      label: "تاریخ عضویت",
    },
  ];
  const inviteList =list?.length ? list.map(item=>{
    return{
      line: item.line,
      email: item.email,
      history: item.history,
    }
  }):[]
  return {tableColumns, inviteList };
};
export default affilateTableData;
