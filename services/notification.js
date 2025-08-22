"use client"

import api_endpoints from "@/constants/api/endpoints";
import api from "./apiClient";

const notificationData=async()=> {
  const res = await api.get(api_endpoints.NOTIFICATION); 
  return res?.data?.news;
}
export default notificationData