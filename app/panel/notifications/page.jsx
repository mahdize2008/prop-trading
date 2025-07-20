
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import NotificationsItem from "@/components/panel/notifications/item";
import notificationMockData from "@/data/panel/notifications/mock";

export default function notification() {
  const {notification}=notificationMockData()


  return (
    <>
      <PanelHeaderSection className="mb-6">اعلانات</PanelHeaderSection>
      {
        [notification,notification,notification,notification,notification,notification].map((item,index)=>(
          <NotificationsItem key={index} title={item.title} massage={item.massage} data={item.data} time={item.time} isSeen={item.isSeen}/>
        ))
      }
    </>
  );
}
