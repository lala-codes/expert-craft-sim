export interface CraftingState {
  // Totals related to recipe
  totalProgress: number;
  totalQuality: number;
  totalDurability: number;
  // Current State
  currentStep: number;
  currentProgress: number;
  currentQuality: number;
  remainingDurability: number;
  remainingCp: number;
}

const initialState: CraftingState = {
  totalProgress: 0,
  totalQuality: 0,
  totalDurability: 0,
  currentStep: 0,
  currentProgress: 0,
  currentQuality: 0,
  remainingDurability: 0,
  remainingCp: 0,
};

export default function reducer(state: CraftingState) {
  return state;
}
