import { create } from "zustand";

interface BearState {
  address: Address | null;
  currentIp: string;
  setAddress: (address: Address) => void;
}

const useAddressStore = create<BearState>((set) => ({
  address: null,
  currentIp: "",
  setAddress: (address: Address) => set({ address }),
}));

export default useAddressStore;
