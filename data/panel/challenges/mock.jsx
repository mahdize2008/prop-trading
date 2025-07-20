import Btn from "@/components/generic/btn";
import Link from "next/link";

const challengesMockData = () => {
  const tableDataMock = {
    line: 1,
    number: "۵۶۳۷۵۳۳",
    password: "11111",
    investorPassword: "111111",
    server: "نام سرور",
    platform: "Roboforex-Demo",
    type: "BestBenefit-Rail23",
    link: "/pannel/challesnges/۵۶۳۷۵۳۳",
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

  return { tableColumnsMock, tableDataMock };
};
export default challengesMockData;
