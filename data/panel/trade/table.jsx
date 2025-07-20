const tradeTableData = () => {
  const columns = [
    {
      key: "symbol",
      label: "نماد",
    },
    {
      key: "type",
      label: "نوع",
    },
    {
      key: "result",
      label: "نتیجه",
    },
    {
      key: "volume",
      label: "حجم(Lot)",
    },
    {
      key: "status",
      label: "سود/ضرر (S)",
    },
    {
      key: "Pip",
      label: "پیپ",
    },
    {
      key: "start_date",
      label: "تاریخ شروع",
    },
    {
      key: "end",
      label: "تاریخ پایان",
    },
    {
      key: "open_price",
      label: "قیمت باز",
    },
    {
      key: "closed_price",
      label: "قیمت بسته",
    },
  ];
  return { columns };
};
export default tradeTableData;
