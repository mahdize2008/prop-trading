import { create } from "zustand";

const useDashboardStore = create((set) => ({
  dashboardstore: {},
  statOne: [],
  statTwo: [],
  setDashboardstore: (newData) =>set({dashboardstore: newData}),
}));

export default useDashboardStore;
