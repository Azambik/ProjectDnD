import { DescriptionPanel } from "./DescriptionPanel";
import { SkillSavePanel } from "./SkillSavePanel";
import { StatPanel } from "./StatPanel";
import { SkillPanel } from "./SkillPanel";
import { CombatPanel } from "./CombatPanel";
import { AttackPanel } from "./AttackPanel";
import { PersonalityPanel } from "./PersonalityPanel";
import { EquipmentPanel } from "./EquipmentPanel";
import { CharacterDetailsPanel } from "./character-details";

export interface CharacterSheet {
    descriptionPanel: DescriptionPanel;
    statPanel: StatPanel;
    skillSavePanel: SkillSavePanel;
    skillPanel: SkillPanel;
    combatPanel: CombatPanel;
    attackPanel: AttackPanel;
    personalityPanel: PersonalityPanel;
    equipmentPanel: EquipmentPanel;
    characterDetailsPanel: CharacterDetailsPanel;
}