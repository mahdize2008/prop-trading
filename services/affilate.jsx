import { api } from "./fetch";

export default async function affilateData() {
  const fetch = await api();
  const { data } = await fetch.get("dashboard/referral-withdrawal/");
  return data;
}