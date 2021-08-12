import { Component, OnInit } from '@angular/core';
import {CharactersheetService} from '../../charactersheet.service';

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
    constructor(private charactersheetService:CharactersheetService) { }
  
  ngOnInit() {
    this.inspiration = this.charactersheetService.characterSheet.skillSavePanel.inspiration;
    this.proficiencyBonus = this.charactersheetService.characterSheet.skillSavePanel.proficiencyBonus;
    this.strengthSave = this.charactersheetService.characterSheet.skillSavePanel.strengthSave;
    this.dexteritySave = this.charactersheetService.characterSheet.skillSavePanel.dexteritySave;
    this.constitutionSave = this.charactersheetService.characterSheet.skillSavePanel.constitutionSave;
    this.intelligenceSave = this.charactersheetService.characterSheet.skillSavePanel.intelligenceSave;
    this.wisdomSave = this.charactersheetService.characterSheet.skillSavePanel.wisdomSave;
    this.charismaSave = this.charactersheetService.characterSheet.skillSavePanel.charismaSave;
  }
  updateInsperation(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.inspiration = val;
  }
  updateproficiencyBonus(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.proficiencyBonus = val;
  }
  updatestrengthSave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.strengthSave = val;
  }
  updatedexteritySave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.dexteritySave = val;
  }
  updateconstitutionSave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.constitutionSave = val;
  }
  updateintelligenceSave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.intelligenceSave = val;
  }
  updatewisdomSave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.wisdomSave = val;
  }
  updatecharismaSave(val: number): void {
    this.charactersheetService.characterSheet.skillSavePanel.charismaSave = val;
  }
}
