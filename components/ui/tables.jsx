import Link from "next/link";
import Btn from "../generic/btn";
import Table from "../generic/table";

export default function UiTables() {
  const columns = [
    {
      key: "line",
      label: "ردیف",
    },
    {
      key: "number",
      label: "شماره لاگین",
    },
    {
      key: "password",
      label: "پسورد",
    },
    {
      key: "investorPassword",
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
      key: "type",
      label: "نوع چالش",
    },
    {
      key: "link",
      label: "",
      renderCell: (row) => (
        <Btn
          variant="outline"
          color="primary"
          icon="icon-left-arrow"
          iconPlace="left"
          size="sm"
          href={row.link}
          as={Link}
          className="w-fit mr-auto"
        >
          ورود به پنل آنالیز
        </Btn>
      ),
    },
  ];
  const data = [
    {
      line: 1,
      number: "۵۶۳۷۵۳۳",
      password: "11111",
      investorPassword: "111111",
      server: "نام سرور",
      platform: "Roboforex-Demo",
      type: "BestBenefit-Rail23",
      link: "/",
    },
    {
      line: 1,
      number: "۵۶۳۷۵۳۳",
      password: "11111",
      investorPassword: "111111",
      server: "نام سرور",
      platform: "Roboforex-Demo",
      type: "BestBenefit-Rail23",
      link: "/",
    },
  ];
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}
