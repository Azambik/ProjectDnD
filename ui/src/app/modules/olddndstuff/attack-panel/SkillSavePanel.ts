import { NumberValueAccessor } from "@angular/forms";

export interface SkillSavePanel {
    inspiration: number;
    proficiencyBonus: number;
    strengthSave: number;
    dexteritySave: number;
    constitutionSave: number;
    intelligenceSave: number;
    wisdomSave: number;
    charismaSave: number;
    strengthTick: boolean;
    dexterityTick: boolean;
    constitutionTick: boolean;
    intelligenceTick: boolean;
    wisdomTick: boolean;
    charismaTick: boolean;
}