import { Component, OnInit } from '@angular/core';
import {CharacterSheetService} from '../../charactersheet.service';

@Component({
  selector: 'app-descriptionPanel',
  templateUrl: './descriptionPanel.component.html',
  styleUrls: ['./descriptionPanel.component.scss']
})
export class descriptionPanelComponent implements OnInit {
  characterName: any;
  classLevel:any;
  background: any;
  playerName:any;
  faction:any;
  race:any;
  alignment:any;
  exp:any;
  age: any;
  height: any;
  weight: any;
  eyes: any;
  skin: any;
  hair: any;
  constructor(private charactersheetService:CharacterSheetService) { }

  ngOnInit() {
    this.characterName = this.charactersheetService.characterSheet.descriptionPanel.characterName;
    this.classLevel = this.charactersheetService.characterSheet.descriptionPanel.classLevel;
    this.background = this.charactersheetService.characterSheet.descriptionPanel.background;
    this.playerName = this.charactersheetService.characterSheet.descriptionPanel.playerName;
    this.faction = this.charactersheetService.characterSheet.descriptionPanel.faction;
    this.race = this.charactersheetService.characterSheet.descriptionPanel.race;
    this.alignment = this.charactersheetService.characterSheet.descriptionPanel.alignment;
    this.exp = this.charactersheetService.characterSheet.descriptionPanel.exp;
    this.age = this.charactersheetService.characterSheet.descriptionPanel.age;
    this.height = this.charactersheetService.characterSheet.descriptionPanel.height;
    this.weight = this.charactersheetService.characterSheet.descriptionPanel.weight;
    this.eyes = this.charactersheetService.characterSheet.descriptionPanel.eyes;
    this.skin = this.charactersheetService.characterSheet.descriptionPanel.skin;
    this.hair = this.charactersheetService.characterSheet.descriptionPanel.hair;
  }

  updateCharacterName(val : string): void {
    this.charactersheetService.characterSheet.descriptionPanel.characterName = val
  }
  updateClassLevel(val : string): void {
    this.charactersheetService.characterSheet.descriptionPanel.classLevel = val
  }
  updateBackground(val: string): void {
    this.charactersheetService.characterSheet.descriptionPanel.background = val
  }
  updatePlayerName(val: string): void {
    this.charactersheetService.characterSheet.descriptionPanel.playerName = val;
  }
  updateFaction(val: string): void {
    this.charactersheetService.characterSheet.descriptionPanel.faction = val;
  }
  updateRace(val: string): void {
    this.charactersheetService.characterSheet.descriptionPanel.race = val;
  }
  updateAlignment(val: string): void {
    this.charactersheetService.characterSheet.descriptionPanel.alignment = val;
  }
  updateExp(val: number): void {
    this.charactersheetService.characterSheet.descriptionPanel.exp = val;
  }
  updateAge(val : number): void {
    this.charactersheetService.characterSheet.descriptionPanel.age = val
  }
  updateHeight(val : string): void {
    this.charactersheetService.characterSheet.descriptionPanel.height = val
  }
  updateWeight(val : string): void {
    this.charactersheetService.characterSheet.descriptionPanel.weight = val
  }
  updateEyes(val : string): void {
    this.charactersheetService.characterSheet.descriptionPanel.eyes = val
  }
  updateSkin(val : string): void {
    this.charactersheetService.characterSheet.descriptionPanel.skin = val
  }
  updateHair(val : string): void {
    this.charactersheetService.characterSheet.descriptionPanel.hair = val
  }
}
