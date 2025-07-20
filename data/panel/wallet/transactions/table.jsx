import Chip from "@/components/generic/chip";

const walletTransactionsTableData = () => {
  const columns = [
    {
      key: "line",
      label: "ردیف",
    },
    {
      key: "type",
      label: "نوع تراکنش",
      renderCell: ( row) => (
        <Chip variant="lightness" color={row.status} icon={row.status_icon}>
          {row.status_text}
        </Chip>
      ),
    },
    {
      key: "number",
      label: "شماره تراکنش",
    },
    {
      key: "amount",
      label: "مقدار",
      renderCell: ( row) => (
        <>{row.amount} <span className="text-dim-lighter text-xs mr-1">دلار</span></>
      ),
    },
    {
      key: "date",
      label: "تاریخ و ساعت",
    },
    {
      key: "explanation",
      label: "توضیح",
    },
  ];

  return {columns};
};

export default walletTransactionsTableData;
