"use client";

import { useEffect } from "react";
import useDashboardStore from "@/store/dashboard";

export default function SiteProvider({ children, initialData }) {
  const {dashboardstore} = useDashboardStore();
  const {setDashboardstore} = useDashboardStore();
    
  useEffect(() => {
    if (!dashboardstore?.length && initialData) {
      setDashboardstore(initialData);
    }
  }, [dashboardstore, initialData, setDashboardstore]);

  return children;
}