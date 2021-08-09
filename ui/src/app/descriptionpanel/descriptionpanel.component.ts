import { Component, OnInit } from '@angular/core';
import {CharactersheetService} from '../../charactersheet.service';

@Component({
  selector: 'app-descriptionpanel',
  templateUrl: './descriptionpanel.component.html',
  styleUrls: ['./descriptionpanel.component.scss']
})
export class DescriptionpanelComponent implements OnInit {
  classlevel:any;
  background: any;
  playername:any;
  faction:any;
  race:any;
  alignment:any;
  exp:any;
  constructor(private charactersheetService:CharactersheetService) { }

  ngOnInit() {
   
    this.classlevel = this.charactersheetService.characterSheet.descriptionPanel.classlevel;
    this.background = this.charactersheetService.characterSheet.descriptionPanel.background;
    this.playername = this.charactersheetService.characterSheet.descriptionPanel.playername;
    this.faction = this.charactersheetService.characterSheet.descriptionPanel.faction;
    this.race = this.charactersheetService.characterSheet.descriptionPanel.race;
    this.alignment = this.charactersheetService.characterSheet.descriptionPanel.alignment;
    this.exp = this.charactersheetService.characterSheet.descriptionPanel.exp;
  }

  
  updateclasslevel(val : string): void {
    this.charactersheetService.characterSheet.descriptionPanel.classlevel = val
  }
  updateBackground(val: string): void {
    this.charactersheetService.characterSheet.descriptionPanel.background = val
  }
  updatePlayername(val: string): void {
    this.charactersheetService.characterSheet.descriptionPanel.playername = val;
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
