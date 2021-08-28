import { Component, OnInit } from '@angular/core';
import {CharacterSheetService} from '../../charactersheet.service';

@Component({
  selector: 'app-combat-panel',
  templateUrl: './combat-panel.component.html',
  styleUrls: ['./combat-panel.component.scss']
})
export class CombatPanelComponent implements OnInit {
  armorClass: number = 0;
  initiative: number = 0;
  speed: number = 0;
  hitPointMaximum: number = 0;
  currentHitPoints: number = 0;
  temporaryHitPoint: number = 0;
  hitDie: string = "";
  constructor(private charactersheetService:CharacterSheetService) { }

  ngOnInit(): void {
    this.armorClass = this.charactersheetService.characterSheet.combatPanel.armorClass;
    this.initiative = this.charactersheetService.characterSheet.combatPanel.initiative;
    this.speed = this.charactersheetService.characterSheet.combatPanel.speed;
    this.hitPointMaximum = this.charactersheetService.characterSheet.combatPanel.hitPointMaximum;
    this.currentHitPoints = this.charactersheetService.characterSheet.combatPanel.currentHitPoints;
    this.temporaryHitPoint = this.charactersheetService.characterSheet.combatPanel.temporaryHitPoint;
    this.hitDie =  this.charactersheetService.characterSheet.combatPanel.hitDie;
  }
  updateArmorClass(val : number): void {
    this.charactersheetService.characterSheet.combatPanel.armorClass = val
  }
  updateInitiative(val : number): void {
    this.charactersheetService.characterSheet.combatPanel.initiative = val
  }
  updateSpeed(val : number): void {
    this.charactersheetService.characterSheet.combatPanel.speed = val
  }
  updateHitPointMaximum(val : number): void {
    this.charactersheetService.characterSheet.combatPanel.hitPointMaximum = val
  }
  updateCurrentHitPoints(val : number): void {
    this.charactersheetService.characterSheet.combatPanel.currentHitPoints = val
  }
  updateTemporaryHitPoint(val : number): void {
    this.charactersheetService.characterSheet.combatPanel.temporaryHitPoint = val
  }
  updateHitDie(val : string): void {
    this.charactersheetService.characterSheet.combatPanel.hitDie = val
  }
}
