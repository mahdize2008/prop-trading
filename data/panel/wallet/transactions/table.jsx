import Chip from "@/components/generic/chip";

const walletTransactionsTableData = (list) => {
  
  const columns = [
    {
      key: "title_display",
      label: "عنوان",
    },
    {
      key: "amount",
      label: "مقدار",
    },
    {
      key: "sender",
      label: "ارسال کننده",
    },
    {
      key: "receiver",
      label: "دریافت کننده",
    },
    {
      key: "status_display",
      label: "وضعیت",
      renderCell: (row) => (
        <Chip variant="lightness" color={row.is_deposit?'success':'danger'} icon={row.is_deposit?'icon-bottom-right-arrow':'icon-top-right-arrow'}>
          {row.is_deposit?
          'واریز':
          'برداشت'
          }
        </Chip>
      ),
    },
    {
      key: "title_display",
      label: "نوع تراکنش",
    },
    {
      key: "created_at",
      label: "تاریخ",
    },
  ];

  const transactions = list.map(item=>{
     return {
      title_display: item.title_display,
      amount: item.amount,
      sender: item.sender,
      receiver: item.receiver,
      status_display: item.status_display,
      is_deposit: item.is_deposit,
      status_text: item.status_text,
      created_at: item.created_at,
    }
  })

  return {columns,transactions};
};

export default walletTransactionsTableData;
