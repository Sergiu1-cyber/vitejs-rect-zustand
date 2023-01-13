import { create } from 'zustand';

export const useCounterStore = create((set) => ({
  counter: 0,
  counterIncrement: (val) => set((state) => ({ counter: state.counter + val })),
}));
