import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    name: "",
    isVerified: false,
  },
  setUserInformation: () =>
    set((user) => ({
      user: {
        name: user.name,
        isVerified: user.isVerified,
      },
    })),
  deleteUser: () =>
    set({
      user: {
        name: "",
        isVerified: false,
      },
    }),
}));

export default useUserStore;
