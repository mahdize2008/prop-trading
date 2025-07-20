import Alert from "@/components/generic/alert";
import Heading from "@/components/generic/heading";
import Table from "@/components/generic/table";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import StatWrap from "@/components/panel/widget/stat/wrap";
import tradeMockData from "@/data/panel/trade/mock";
import tradeStatData from "@/data/panel/trade/stat";
import tradeTableData from "@/data/panel/trade/table";

export default function tradeDetails() {
  const { details, details2 } = tradeStatData();
  const { trade } = tradeMockData();
  const { columns } = tradeTableData();
  return (
    <>
      <PanelHeaderSection className="mb-6">جزئیات معامله</PanelHeaderSection>
      <Alert variant="lightness" className="mb-8" color="info">
        حساب شما فعال و درحال ترید می‌باشد. برای ورود به مرحله‌ بعدی، باید حداقل
        ۵ روز ترید انجام دهید.
      </Alert>
      <div className="flex flex-wrap items-center -m-2 mb-12">
        <StatWrap statList={details} className="w-1/4 p-2" />
      </div>
      <Heading variant="h6" className="mb-4">پارامتر های مدیریت ریسک</Heading>
      <div className="flex flex-wrap items-center -m-2 mb-12">
        <StatWrap statList={details2} className="w-1/3 p-2" />
      </div>
      <Heading variant="h6" className="mb-4">معاملات</Heading>
      <Table columns={columns} data={[trade,trade,trade,trade]}/>
    </>
  );
}
