import api_endpoints from "@/constants/api/endpoints";
import api from "./apiClient";

export const referralData = async () => {
  const res = await api.get(api_endpoints.AFFILATE.WITHDRAW);
  return res?.data;
};
