import { Component, OnInit } from '@angular/core';
import {CharacterSheetService} from '../../charactersheet.service';

@Component({
  selector: 'app-skillsavepanel',
  templateUrl: './skillsavepanel.component.html',
  styleUrls: ['./skillsavepanel.component.scss']
})
export class SkillsavepanelComponent implements OnInit {
    inspiration: number = 0;
    proficiencyBonus: number = 0;
    strengthSave: number = 0;
    dexteritySave: number = 0;
    constitutionSave: number = 0;
    intelligenceSave: number = 0;
    wisdomSave: number = 0;
    charismaSave: number = 0;
    strengthTick: boolean = false;
    dexterityTick: boolean = false;
    constitutionTick: boolean = false;
    intelligenceTick: boolean = false;
    wisdomTick: boolean = false;
    charismaTick: boolean = false;
    constructor(private charactersheetService:CharacterSheetService) { }
  
  ngOnInit() {
    this.inspiration = this.charactersheetService.characterSheet.skillSavePanel.inspiration;
    this.proficiencyBonus = this.charactersheetService.characterSheet.skillSavePanel.proficiencyBonus;
    this.strengthSave = this.charactersheetService.characterSheet.skillSavePanel.strengthSave;
    this.dexteritySave = this.charactersheetService.characterSheet.skillSavePanel.dexteritySave;
    this.constitutionSave = this.charactersheetService.characterSheet.skillSavePanel.constitutionSave;
    this.intelligenceSave = this.charactersheetService.characterSheet.skillSavePanel.intelligenceSave;
    this.wisdomSave = this.charactersheetService.characterSheet.skillSavePanel.wisdomSave;
    this.charismaSave = this.charactersheetService.characterSheet.skillSavePanel.charismaSave;
    this.strengthTick = this.charactersheetService.characterSheet.skillSavePanel.strengthTick;
    this.dexterityTick = this.charactersheetService.characterSheet.skillSavePanel.dexterityTick;
    this.constitutionTick = this.charactersheetService.characterSheet.skillSavePanel.constitutionTick;
    this.intelligenceTick = this.charactersheetService.characterSheet.skillSavePanel.intelligenceTick;
    this.wisdomTick = this.charactersheetService.characterSheet.skillSavePanel.wisdomTick;
    this.charismaTick = this.charactersheetService.characterSheet.skillSavePanel.charismaTick;
  }
  updateInspiration(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.inspiration = val;
  }
  updateProficiencyBonus(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.proficiencyBonus = val;
  }
  updateStrengthSave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.strengthSave = val;
  }
  updateStrengthTick(val: boolean): void {
    this.charactersheetService.characterSheet.skillSavePanel.strengthTick = val;
  }
  updateDexteritySave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.dexteritySave = val;
  }
  updateDexterityTick(val: boolean): void {
    this.charactersheetService.characterSheet.skillSavePanel.dexterityTick = val;
  }
  updateConstitutionSave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.constitutionSave = val;
  }
  updateConstitutionTick(val: boolean): void {
    this.charactersheetService.characterSheet.skillSavePanel.constitutionTick = val;
  }
  updateIntelligenceSave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.intelligenceSave = val;
  }
  updateIntelligenceTick(val: boolean): void {
    this.charactersheetService.characterSheet.skillSavePanel.intelligenceTick = val;
  }
  updateWisdomSave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.wisdomSave = val;
  }
  updateWisdomTick(val: boolean): void {
    this.charactersheetService.characterSheet.skillSavePanel.wisdomTick = val;
  }
  updateCharismaSave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.charismaSave = val;
  }
  updateCharismaTick(val: boolean): void {
    this.charactersheetService.characterSheet.skillSavePanel.charismaTick = val;
  }
}
