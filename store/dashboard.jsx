import { create } from "zustand";

const useDashboardStore = create((set) => ({
  dashboardstore: {},
  setDashboardstore:(newData)=>set({dashboardstore : newData})
}));

export default useDashboardStore;
