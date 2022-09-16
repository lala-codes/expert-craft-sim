import { ProgressQualitySkill } from './types';

const progressQualitySkills: ProgressQualitySkill[] = [
  {
    name: 'Basic Synthesis',
    cpCost: 0,
    durabilityCost: 10,
    progressRate: 1.2,
  },
  {
    name: 'Careful Synthesis',
    cpCost: 7,
    durabilityCost: 10,
    progressRate: 1.5,
  },
  {
    name: 'Rapid Synthesis',
    cpCost: 0,
    durabilityCost: 10,
    progressRate: 5.0,
    successRate: 0.5,
  },
  {
    name: 'Groundwork',
    cpCost: 18,
    durabilityCost: 20,
    progressRate: 3.0,
  },
  {
    name: 'Focused Synthesis',
    cpCost: 5,
    durabilityCost: 10,
    progressRate: 2.0,
    successRate: 0.5,
  },
  {
    name: 'Brand of the Elements',
    cpCost: 6,
    durabilityCost: 10,
    progressRate: 1,
  },
  {
    name: 'Intensive Synthesis',
    cpCost: 6,
    durabilityCost: 10,
    progressRate: 4.0,
  },
  {
    name: 'Basic Touch',
    cpCost: 18,
    durabilityCost: 10,
    qualityRate: 1,
  },
  {
    name: 'Standard Touch',
    cpCost: 32,
    durabilityCost: 10,
    qualityRate: 1.25,
  },
  {
    name: 'Hasty Touch',
    cpCost: 0,
    durabilityCost: 10,
    qualityRate: 1,
    successRate: 0.6,
  },
  {
    name: 'Precise Touch',
    cpCost: 18,
    durabilityCost: 10,
    qualityRate: 1.5,
  },
  {
    name: 'Focused Touch',
    cpCost: 18,
    durabilityCost: 10,
    qualityRate: 1.5,
    successRate: 0.5,
  },
  {
    name: 'Patient Touch',
    cpCost: 6,
    durabilityCost: 10,
    qualityRate: 1,
    successRate: 0.5,
  },
  {
    name: 'Prudent Touch',
    cpCost: 25,
    durabilityCost: 5,
    qualityRate: 1,
  },
  {
    name: 'Preparatory Touch',
    cpCost: 40,
    durabilityCost: 20,
    qualityRate: 2,
  },
  {
    name: 'Delicate Synthesis',
    cpCost: 32,
    durabilityCost: 10,
    progressRate: 1,
    qualityRate: 1,
  },
];

export function caclCpCost({ cpCost }: ProgressQualitySkill) {
  //   if (this == Standard_Touch) {
  //     System.out.println('123');
  //     System.out.println(engine.isBasicTouch());
  //   }
  //   if (this == Standard_Touch && engine.isBasicTouch()) {
  //     return 18;
  //   }
  return cpCost;
}

export function calcProgressRate({
  progressRate = 0,
}: ProgressQualitySkill): number {
  if (progressRate == 0) return 0;

  let temp = 1.0;
  let hasNOTE = false;

  // for(ActiveBuff ab: engine.getActiveBuffs()) {
  // 	if(ab.buff==Buff.name_of_the_elements) {hasNOTE = true;}
  // 	temp += ab.buff.getProgressBuff();
  // }

  // if(this==Brand_of_the_Elements && hasNOTE) {
  // 	temp += (double)engine.getPresentProgress()/engine.getTotalProgress()*2;
  // }

  return temp * progressRate;
}

export function calcQualityRate({
  qualityRate = 0,
}: ProgressQualitySkill): number {
  if (qualityRate == 0) return 0;

  let temp = 1.0;
  // for(ActiveBuff ab: engine.getActiveBuffs()) {
  //     temp += ab.buff.getQualityBuff();
  // }

  return temp * qualityRate;
}

export function calcSuccessRate({ successRate = 1 }: ProgressQualitySkill) {
  if (successRate == 1) return 1;

  let d = successRate; // + (engine.getCraftingStatus() == CraftingStatus.Centered ? 0.25 : 0);
  return Math.round(d * 100) / 100;
}
