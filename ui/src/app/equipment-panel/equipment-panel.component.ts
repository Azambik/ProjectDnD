import { Component, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/charactersheet.service';
import { CharacterSheet } from '../models/CharacterSheet';

@Component({
  selector: 'app-equipment-panel',
  templateUrl: './equipment-panel.component.html',
  styleUrls: ['./equipment-panel.component.scss']
})
export class EquipmentPanelComponent implements OnInit {
    equipment: string = '';
    copperPoints: number= 0;
    silverPoints: number = 0;
    electrumPoints: number = 0;
    goldPoints: number = 0;
    platinumPoints: number = 0;
  constructor(private characterSheetService:CharacterSheetService) { }
  updateEquipment(equipment: string): void {
    this.characterSheetService.characterSheet.equipmentPanel.equipment = equipment;
  }
  updateCopperPoints(copperPoints: number): void {
    this.characterSheetService.characterSheet.equipmentPanel.copperPoints = copperPoints;
  }
  updateSilverPoints(silverPoints: number): void {
    this.characterSheetService.characterSheet.equipmentPanel.silverPoints = silverPoints;
  }
  updateElectrumPoints(electrumPoints: number): void {
    this.characterSheetService.characterSheet.equipmentPanel.electrumPoints = electrumPoints;
  }
  updateGoldPoints(goldPoints: number): void {
    this.characterSheetService.characterSheet.equipmentPanel.goldPoints = goldPoints;
  }
  updatePlatinumPoints(platinumPoints: number): void {
    this.characterSheetService.characterSheet.equipmentPanel.platinumPoints = platinumPoints;
  }
  ngOnInit(): void {
    this.equipment = this.characterSheetService.characterSheet.equipmentPanel.equipment;
    this.copperPoints = this.characterSheetService.characterSheet.equipmentPanel.copperPoints;
    this.silverPoints = this.characterSheetService.characterSheet.equipmentPanel.silverPoints;
    this.electrumPoints = this.characterSheetService.characterSheet.equipmentPanel.electrumPoints;
    this.goldPoints = this.characterSheetService.characterSheet.equipmentPanel.goldPoints;
    this.platinumPoints = this.characterSheetService.characterSheet.equipmentPanel.platinumPoints;
  }

}
