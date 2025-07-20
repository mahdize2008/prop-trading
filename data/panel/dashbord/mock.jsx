import Btn from "@/components/generic/btn";
import Link from "next/link";

const dashbordMockData = () => {
  const statMock = {
    name: "درامد شما تا کنون",
    icon: "icon-dollar",
    amount: "$۳,۰۰۰",
    color: "neutral-dark",
  };
  const statMock2 = {
    name: "تعداد افراد معرفی‌شده",
    icon: "icon-user",
    amount: "0",
  };
  const tableDataMock = {
    line: 1,
    number: "۵۶۳۷۵۳۳",
    password: "11111",
    investorPassword: "111111",
    server: "نام سرور",
    platform: "Roboforex-Demo",
    type: "BestBenefit-Rail23",
    link: "/",
  };
  const tableColumnsMock = [
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
          href={row?.link}
          as={Link}
          className="w-fit mr-auto"
        >
          ورود به پنل آنالیز
        </Btn>
      ),
    },
  ];
  const code = "۸۷۶۵۶۶۳";
  const link =
    "http://novaprop.org/dashboard/referral-withdrawal/?ref=1d93c905";

  return { tableColumnsMock, statMock, statMock2, tableDataMock, code, link };
};
export default dashbordMockData;
