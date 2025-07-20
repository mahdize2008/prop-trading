import SelectBox from "@/components/generic/select";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import TicketItem from "@/components/panel/ticket/ticket-item";
import StatWrap from "@/components/panel/widget/stat/wrap";
import ticketStatData from "@/data/panel/ticket/stat";
import ticketMockData from "@/data/panel/ticket/ticket-mock";

export default function ticket() {
  const { statList } = ticketStatData();
  const { ticketMock } = ticketMockData();
  const options = [
    {
      value: 0,
      label: "تست ۱",
    },
    {
      value: 1,
      label: "تست ۲",
    },
    {
      value: 2,
      label: "تست ۳",
    },
    {
      value: 3,
      label: "تست ۴",
    },
  ];
  return (
    <>
      <div className="flex -m-1.5 mb-20">
        <StatWrap className="p-1.5 w-1/3" statList={statList}></StatWrap>
      </div>
      <PanelHeaderSection
        leftSide={<SelectBox className="mr-auto w-[240px]" options={options} />}
      >
        آخرین تیکت ها
      </PanelHeaderSection>
      {
        [ticketMock,ticketMock,ticketMock,ticketMock].map((item,index)=>(
          <TicketItem key={index} id={item.id} number={item.number} date={item.date} text={item.text} status={item.status} status_text={item.status_text}/>
        ))
      }
    </>
  );
}
