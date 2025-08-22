import { create } from "zustand";

const useLoading = create((set) => ({
  isLoading: false,
  setLoading: () =>
    set((status) => ({
      isLoading:status
    })),
}));

export default useLoading;
