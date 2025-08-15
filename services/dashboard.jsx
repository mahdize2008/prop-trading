import { api } from "./fetch";

async function dashboardData() {
  const fetch = await api();
  const { data } = await fetch.get("dashboard/");
  return data;
}

export { dashboardData };
