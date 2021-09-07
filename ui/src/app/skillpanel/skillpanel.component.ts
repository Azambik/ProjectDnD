import { Component, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/charactersheet.service';

@Component({
  selector: 'app-skillPanel',
  templateUrl: './skillPanel.component.html',
  styleUrls: ['./skillPanel.component.scss']
})
export class skillPanelComponent implements OnInit {
    acrobatics: number = 0;
    animalHandling: number = 0;
    arcana: number = 0;
    athletics: number = 0;
    deception: number = 0;
    history: number = 0;
    insight: number = 0;
    intimidation: number = 0;
    investigation: number = 0;
    medicine: number = 0;
    nature: number = 0;
    perception: number = 0;
    performance: number = 0;
    persuasion: number = 0;
    religion: number = 0;
    slightOfHand: number = 0;
    stealth: number = 0;
    survival: number = 0;
    acrobaticsTick: boolean = false;
    animalHandlingTick: boolean = false;
    arcanaTick: boolean = false;
    athleticsTick: boolean = false;
    deceptionTick: boolean = false;
    historyTick: boolean = false;
    insightTick: boolean = false;
    intimidationTick: boolean = false;
    investigationTick: boolean = false;
    medicineTick: boolean = false;
    natureTick: boolean = false;
    perceptionTick: boolean = false;
    performanceTick: boolean = false;
    persuasionTick: boolean = false;
    religionTick: boolean = false;
    slightOfHandTick: boolean = false;
    stealthTick: boolean = false;
    survivalTick: boolean = false;
  constructor(private characterSheetService:CharacterSheetService) { }
  
  updateAcrobatics(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.acrobatics = val
  }
  updateAnimalHandling(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.animalHandling = val
  }
  updateArcana(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.arcana = val
  }
  updateAthletics(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.athletics = val
  }
  updateDeception(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.deception = val
  }
  updateHistory(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.history = val
  }
  updateInsight(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.insight = val
  }
  updateIntimidation(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.intimidation = val
  }
  updateInvestigation(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.investigation = val
  }
  updateMedicine(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.medicine = val
  }
  updateNature(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.nature = val
  }
  updatePerception(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.perception = val
  }
  updatePerformance(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.performance = val
  }
  updatePersuasion(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.persuasion = val
  }
  updateReligion(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.religion = val
  }
  updateSlightOfHand(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.slightOfHand = val
  }
  updateStealth(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.stealth = val
  }
  updateSurvival(val : number): void {
    this.characterSheetService.characterSheet.skillPanel.survival = val
  }
  updateAcrobaticsTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.acrobaticsTick = val
  }
  updateAnimalHandlingTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.animalHandlingTick = val
  }
  updateArcanaTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.arcanaTick = val
  }
  updateAthleticsTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.athleticsTick = val
  }
  updateDeceptionTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.deceptionTick = val
  }
  updateHistoryTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.historyTick = val
  }
  updateInsightTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.insightTick = val
  }
  updateIntimidationTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.intimidationTick = val
  }
  updateInvestigationTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.investigationTick = val
  }
  updateMedicineTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.medicineTick = val
  }
  updateNatureTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.natureTick = val
  }
  updatePerceptionTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.perceptionTick = val
  }
  updatePerformanceTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.performanceTick = val
  }
  updatePersuasionTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.persuasionTick = val
  }
  updateReligionTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.religionTick = val
  }
  updateSlightOfHandTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.slightOfHandTick = val
  }
  updateStealthTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.stealthTick = val
  }
  updateSurvivalTick(val : boolean): void {
    this.characterSheetService.characterSheet.skillPanel.survivalTick = val
  }

  ngOnInit(): void {
    this.acrobatics = this.characterSheetService.characterSheet.skillPanel.acrobatics;
    this.animalHandling = this.characterSheetService.characterSheet.skillPanel.animalHandling;
    this.arcana = this.characterSheetService.characterSheet.skillPanel.arcana;
    this.athletics = this.characterSheetService.characterSheet.skillPanel.athletics;
    this.deception = this.characterSheetService.characterSheet.skillPanel.deception;
    this.history = this.characterSheetService.characterSheet.skillPanel.history;
    this.insight = this.characterSheetService.characterSheet.skillPanel.insight;
    this.intimidation = this.characterSheetService.characterSheet.skillPanel.intimidation;
    this.investigation = this.characterSheetService.characterSheet.skillPanel.investigation;
    this.medicine = this.characterSheetService.characterSheet.skillPanel.medicine;
    this.nature = this.characterSheetService.characterSheet.skillPanel.nature;
    this.perception = this.characterSheetService.characterSheet.skillPanel.perception;
    this.performance = this.characterSheetService.characterSheet.skillPanel.performance;
    this.persuasion = this.characterSheetService.characterSheet.skillPanel.persuasion;
    this.religion = this.characterSheetService.characterSheet.skillPanel.religion;
    this.slightOfHand = this.characterSheetService.characterSheet.skillPanel.slightOfHand;
    this.stealth = this.characterSheetService.characterSheet.skillPanel.stealth;
    this.survival = this.characterSheetService.characterSheet.skillPanel.survival;
    this.acrobaticsTick = this.characterSheetService.characterSheet.skillPanel.acrobaticsTick;
    this.animalHandlingTick = this.characterSheetService.characterSheet.skillPanel.animalHandlingTick;
    this.arcanaTick = this.characterSheetService.characterSheet.skillPanel.arcanaTick;
    this.athleticsTick = this.characterSheetService.characterSheet.skillPanel.athleticsTick;
    this.deceptionTick = this.characterSheetService.characterSheet.skillPanel.deceptionTick;
    this.historyTick = this.characterSheetService.characterSheet.skillPanel.historyTick;
    this.insightTick = this.characterSheetService.characterSheet.skillPanel.insightTick;
    this.intimidationTick = this.characterSheetService.characterSheet.skillPanel.intimidationTick;
    this.investigationTick = this.characterSheetService.characterSheet.skillPanel.investigationTick;
    this.medicineTick = this.characterSheetService.characterSheet.skillPanel.medicineTick;
    this.natureTick = this.characterSheetService.characterSheet.skillPanel.natureTick;
    this.perceptionTick = this.characterSheetService.characterSheet.skillPanel.perceptionTick;
    this.performanceTick = this.characterSheetService.characterSheet.skillPanel.performanceTick;
    this.persuasionTick = this.characterSheetService.characterSheet.skillPanel.persuasionTick;
    this.religionTick = this.characterSheetService.characterSheet.skillPanel.religionTick;
    this.slightOfHandTick = this.characterSheetService.characterSheet.skillPanel.slightOfHandTick;
    this.stealthTick = this.characterSheetService.characterSheet.skillPanel.stealthTick;
    this.survivalTick = this.characterSheetService.characterSheet.skillPanel.survivalTick;
  }

}
