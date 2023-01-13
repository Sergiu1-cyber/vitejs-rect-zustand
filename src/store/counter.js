import { create } from 'zustand';

export const useCounterStore = create((set) => ({
  counter: 0,
  counterIncrement: () => set((state) => ({ counter: state.counter + 1 })),
}));
