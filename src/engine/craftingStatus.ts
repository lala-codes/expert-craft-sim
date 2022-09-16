import { CraftingStatus, CraftingStatusName } from './types';

const DEFAULT_CRAFTING_SKILL: CraftingStatus = {
  name: CraftingStatusName.Normal,
  probability: 0.4,
};

// Order of items here matters
const availableExpertCraftingStatuses: CraftingStatus[] = [
  { name: CraftingStatusName.Sturdy, probability: 0.18 },
  { name: CraftingStatusName.Primed, probability: 0.12 },
  { name: CraftingStatusName.Good, probability: 0.1 },
  { name: CraftingStatusName.Centered, probability: 0.1 },
  { name: CraftingStatusName.Malleable, probability: 0.1 },
  DEFAULT_CRAFTING_SKILL,
];

export function getRandomExpertCraftingStatus(): CraftingStatus {
  let randNum = Math.random();
  let tempProbability = 0;
  return (
    availableExpertCraftingStatuses.find((skill) => {
      tempProbability += skill.probability;
      return tempProbability >= randNum;
    }) || DEFAULT_CRAFTING_SKILL
  );
}
