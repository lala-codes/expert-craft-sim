export interface Buff {}

export interface Skill {
  name: string;
  cpCost: number;
  durabilityCost?: number; // default 0
  progressRate?: number; // default 0
  qualityRate?: number; // default 0
  successRate?: number; // default 1
}

export interface ProgressQualitySkill extends Skill {}

export interface BuffSkill extends Skill {
  lastsNumberOfTurns?: number; // default 1
  canOnlyBeUsedOnce?: boolean; // default false
  availableFirstTurnOnly?: boolean; // default false
  buff: Buff;
}

export interface SpecialSkill extends Skill {}

export enum CraftingStatusName {
  Normal = 'Normal',
  Good = 'good',
  Centered = 'centered',
  Sturdy = 'sturdy',
  Malleable = 'malleable',
  Primed = 'primed',
}

export interface CraftingStatus {
  name: CraftingStatusName;
  probability: number;
}
