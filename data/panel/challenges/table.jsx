import Btn from "@/components/generic/btn";
import Link from "next/link";

const challengesTableData = ({rowsData}) => {
  const challengesTableRows = rowsData.map((item) => {
    return {
      id: item.id,
      login: item.login,
      password: item.password,
      password_investor: item.password_investor,
      server: item.server,
      platform: item.broker.name,
      product: item.product.name,
      link: item.login,
    };
  });
  const challengesTableColumns = [
    {
      key: "id",
      label: "ردیف",
    },
    {
      key: "login",
      label: "شماره لاگین",
    },
    {
      key: "password",
      label: "پسورد",
    },
    {
      key: "password_investor",
      label: "اینوستور پسورد",
    },
    {
      key: "server",
      label: "سرور",
    },
    {
      key: "platform",
      label: "پلتفرم معاملاتی",
    },
    {
      key: "product",
      label: "نوع چالش",
    },
    {
      key: "link",
      label: "",
      renderCell: (row) => {
        return (
          <Btn
            variant="outline"
            color="primary"
            icon="icon-left-arrow"
            iconPlace="left"
            size="sm"
            href={`/panel/challenges/analyse/${row.link}`}
            as={Link}
            className="w-fit mr-auto"
          >
            ورود به پنل آنالیز
          </Btn>
        );
      },
    },
  ];
  return { challengesTableRows, challengesTableColumns };
};
export default challengesTableData;
