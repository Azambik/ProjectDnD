import { Component, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/charactersheet.service';


@Component({
  selector: 'app-attack-panel',
  templateUrl: './attack-panel.component.html',
  styleUrls: ['./attack-panel.component.scss']
})
export class AttackPanelComponent implements OnInit {
  attackOne: string ='';
  attackBonusOne: string ='';
  attackTypeOne: string ='';
  attackTwo: string ='';
  attackBonusTwo: string ='';
  attackTypeTwo: string ='';
  attackThree: string ='';
  attackBonusThree: string ='';
  attackTypeThree: string ='';
  attackFour: string ='';
  attackBonusFour: string ='';
  attackTypeFour: string ='';
  attackDescription: string ='';
  constructor(private characterSheetService:CharacterSheetService) { }

  updateAttackOne (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackOne = val;
  }
  updateAttackBonusOne (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackBonusOne = val;
  }
  updateAttackTypeOne (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackTypeOne = val;
  }
  updateAttackTwo (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackTwo = val;
  }
  updateAttackBonusTwo (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackBonusTwo = val;
  }
  updateAttackTypeTwo (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackTypeTwo = val;
  }
  updateAttackThree (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackThree = val;
  }
  updateAttackBonusThree (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackBonusThree = val;
  }
  updateAttackTypeThree (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackTypeThree = val;
  }
  updateAttackFour (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackFour = val;
  }
  updateAttackBonusFour (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackBonusFour = val;
  }
  updateAttackTypeFour (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackTypeFour = val;
  }
  updateAttackDescription (val : string): void {
    this.characterSheetService.characterSheet.attackPanel.attackDescription = val;
  }
  ngOnInit(): void {
    this.attackOne = this.characterSheetService.characterSheet.attackPanel.attackOne;
    this.attackBonusOne = this.characterSheetService.characterSheet.attackPanel.attackBonusOne;
    this.attackTypeOne = this.characterSheetService.characterSheet.attackPanel.attackTypeOne;
    this.attackTwo = this.characterSheetService.characterSheet.attackPanel.attackTwo;
    this.attackBonusTwo = this.characterSheetService.characterSheet.attackPanel.attackBonusTwo;
    this.attackTypeTwo = this.characterSheetService.characterSheet.attackPanel.attackTypeTwo;
    this.attackThree = this.characterSheetService.characterSheet.attackPanel.attackThree;
    this.attackBonusThree = this.characterSheetService.characterSheet.attackPanel.attackBonusThree;
    this.attackTypeThree = this.characterSheetService.characterSheet.attackPanel.attackTypeThree;
    this.attackFour = this.characterSheetService.characterSheet.attackPanel.attackFour;
    this.attackBonusFour = this.characterSheetService.characterSheet.attackPanel.attackBonusFour;
    this.attackTypeFour = this.characterSheetService.characterSheet.attackPanel.attackTypeFour;
    this.attackDescription = this.characterSheetService.characterSheet.attackPanel.attackDescription;
  }

}
