import { Component, OnInit } from '@angular/core';
import {CharacterSheetService} from '../../charactersheet.service';

@Component({
  selector: 'app-descriptionpanel',
  templateUrl: './descriptionpanel.component.html',
  styleUrls: ['./descriptionpanel.component.scss']
})
export class DescriptionpanelComponent implements OnInit {
  classLevel:any;
  background: any;
  playerName:any;
  faction:any;
  race:any;
  alignment:any;
  exp:any;
  constructor(private charactersheetService:CharacterSheetService) { }

  ngOnInit() {
   
    this.classLevel = this.charactersheetService.characterSheet.descriptionPanel.classLevel;
    this.background = this.charactersheetService.characterSheet.descriptionPanel.background;
    this.playerName = this.charactersheetService.characterSheet.descriptionPanel.playerName;
    this.faction = this.charactersheetService.characterSheet.descriptionPanel.faction;
    this.race = this.charactersheetService.characterSheet.descriptionPanel.race;
    this.alignment = this.charactersheetService.characterSheet.descriptionPanel.alignment;
    this.exp = this.charactersheetService.characterSheet.descriptionPanel.exp;
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


}
