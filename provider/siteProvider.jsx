"use client";

import { useEffect } from "react";
import useDashboardStore from "@/store/dashboard";

export default function SiteProvider({ children, initialData }) {
  const {dashboardstore} = useDashboardStore();
  const {setDashboardstore} = useDashboardStore();
    console.log(initialData );
    console.log(dashboardstore);
    console.log(setDashboardstore);
    
  useEffect(() => {
    if (!dashboardstore?.length && initialData) {
      setDashboardstore(initialData);
    }
  }, [dashboardstore, initialData, setDashboardstore]);

  return children;
}