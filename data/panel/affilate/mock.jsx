const affilateMockData = (list) => {
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
      line: list.line,
      email: list.email,
      history: list.history,
    }
  }):[]
  return {tableColumns, inviteList };
};
export default affilateMockData;
