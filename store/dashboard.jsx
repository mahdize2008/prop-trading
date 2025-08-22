import { create } from "zustand";

const useInfoStore = create((set) => ({
  infoStore: {},
  setInfoStore: (newData) =>set({infoStore: newData}),
}));

export default useInfoStore;
