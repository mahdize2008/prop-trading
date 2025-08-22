"use client"

import api_endpoints from "@/constants/api/endpoints";
import api from "./apiClient";
import { setCookie } from "@/utils/cookie";

export async function loginUser(data) {
  const res = await api.post(api_endpoints.AUTH.LOGIN, data)
  if (res?.data?.access) {
    setCookie("token", res.data.access);
  }
  if (res?.data?.refresh) {
    setCookie("refresh", res.data.refresh);
  }
  return res;
}

