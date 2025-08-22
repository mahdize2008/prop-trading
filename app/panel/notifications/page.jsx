"use client";

import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import NotificationsItem from "@/components/panel/notifications/item";
import notificationMockData from "@/data/panel/notifications/mock";
import notificationData from "@/services/notification";
import { useEffect, useState } from "react";

export default function notification() {
  const { notification } = notificationMockData();
  const [notifications,setNotifications]=useState([])

  const fetch = async () => {
    try{
      const list = await notificationData();
      setNotifications(list)
    }catch(err){
      console.error(err);
    }
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <PanelHeaderSection className="mb-6">اعلانات</PanelHeaderSection>
      {notifications.map((item, index) => (
        <NotificationsItem key={index} title={item.body} />
      ))}
    </>
  );
}
