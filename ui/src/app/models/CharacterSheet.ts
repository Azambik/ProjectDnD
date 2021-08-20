import { DescriptionPanel } from "./DescriptionPanel";
import { SkillSavePanel } from "./SkillSavePanel";
import { StatPanel } from "./StatPanel";
import { SkillPanel } from "./skillpanel"

export interface CharacterSheet {
    descriptionPanel: DescriptionPanel;
    statPanel: StatPanel;
    skillSavePanel: SkillSavePanel;
    skillPanel: SkillPanel;
}