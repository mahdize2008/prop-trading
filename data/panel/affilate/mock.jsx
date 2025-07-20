const affilateMockData = () => {
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
  const code = "۸۷۶۵۶۶۳";
  const link =
    "http://novaprop.org/dashboard/referral-withdrawal/?ref=1d93c905";
  const invited = {
    line: 1,
    email: "ahmaderenbiuyg@gmail.com",
    history: "12 Dec 2024",
  };
  return {tableColumns, code, link, invited };
};
export default affilateMockData;
