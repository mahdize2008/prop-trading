"use client"

import api_endpoints from "@/constants/api/endpoints";
import api from "./apiClient";

 const infoData=async()=> {
  const res = await api.get(api_endpoints.INFO); 
  return res?.data;
}
export default infoData