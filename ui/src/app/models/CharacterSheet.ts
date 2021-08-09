import { DescriptionPanel } from "./DescriptionPanel";
import { SkillSavePanel } from "./SkillSavePanel";
import { StatPanel } from "./StatPanel";

export interface CharacterSheet {
    descriptionPanel: DescriptionPanel;
    statPanel: StatPanel;
    skillSavePanel: SkillSavePanel;
}