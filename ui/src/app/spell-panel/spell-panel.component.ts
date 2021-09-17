import { Component, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/charactersheet.service';

@Component({
  selector: 'app-spell-panel',
  templateUrl: './spell-panel.component.html',
  styleUrls: ['./spell-panel.component.scss']
})
export class SpellPanelComponent implements OnInit {
   //header
   spellCastingClass: string = '';
   spellCastingAbility: string = '';
   spellSaveDC: string = '';
   spellAttackBonus: string = '';
   //cantrips
   cantripOne: string = '';
   cantripTwo: string = '';
   cantripThree: string = '';
   cantripFore: string = '';
   cantripFive: string = '';
   cantripSix: string = '';
   cantripSeven: string = '';
   cantripEight: string = '';

   //level one spells
   l1SpellSlotTotal: string = '';
   l1SpellSlotExpended: string = '';
   l1Slot1:string = '';
   l1Slot2:string = '';
   l1Slot3:string = '';
   l1Slot4:string = '';
   l1Slot5:string = '';
   l1Slot6:string = '';
   l1Slot7:string = '';
   l1Slot8:string = '';
   l1Slot9:string = '';
   l1Slot10:string = '';
   l1Slot11:string = '';
   l1Slot12:string = '';
   l1Slot1Tick:boolean = false;
   l1Slot2Tick:boolean = false;
   l1Slot3Tick:boolean = false;
   l1Slot4Tick:boolean = false;
   l1Slot5Tick:boolean = false;
   l1Slot6Tick:boolean = false;
   l1Slot7Tick:boolean = false;
   l1Slot8Tick:boolean = false;
   l1Slot9Tick:boolean = false;
   l1Slot10Tick:boolean = false;
   l1Slot11Tick:boolean = false;
   l1Slot12Tick:boolean = false;

    //level two spells
    l2SpellSlotTotal: string = '';
    l2SpellSlotExpended: string = '';
    l2Slot1:string = '';
    l2Slot2:string = '';
    l2Slot3:string = '';
    l2Slot4:string = '';
    l2Slot5:string = '';
    l2Slot6:string = '';
    l2Slot7:string = '';
    l2Slot8:string = '';
    l2Slot9:string = '';
    l2Slot10:string = '';
    l2Slot11:string = '';
    l2Slot12:string = '';
    l2Slot1Tick:boolean = false;
    l2Slot2Tick:boolean = false;
    l2Slot3Tick:boolean = false;
    l2Slot4Tick:boolean = false;
    l2Slot5Tick:boolean = false;
    l2Slot6Tick:boolean = false;
    l2Slot7Tick:boolean = false;
    l2Slot8Tick:boolean = false;
    l2Slot9Tick:boolean = false;
    l2Slot10Tick:boolean = false;
    l2Slot11Tick:boolean = false;
    l2Slot12Tick:boolean = false;

     //level Three spells
   l3SpellSlotTotal: string = '';
   l3SpellSlotExpended: string = '';
   l3Slot1:string = '';
   l3Slot2:string = '';
   l3Slot3:string = '';
   l3Slot4:string = '';
   l3Slot5:string = '';
   l3Slot6:string = '';
   l3Slot7:string = '';
   l3Slot8:string = '';
   l3Slot9:string = '';
   l3Slot10:string = '';
   l3Slot11:string = '';
   l3Slot12:string = '';
   l3Slot1Tick:boolean = false;
   l3Slot2Tick:boolean = false;
   l3Slot3Tick:boolean = false;
   l3Slot4Tick:boolean = false;
   l3Slot5Tick:boolean = false;
   l3Slot6Tick:boolean = false;
   l3Slot7Tick:boolean = false;
   l3Slot8Tick:boolean = false;
   l3Slot9Tick:boolean = false;
   l3Slot10Tick:boolean = false;
   l3Slot11Tick:boolean = false;
   l3Slot12Tick:boolean = false;

    //level four spells
    l4SpellSlotTotal: string = '';
    l4SpellSlotExpended: string = '';
    l4Slot1:string = '';
    l4Slot2:string = '';
    l4Slot3:string = '';
    l4Slot4:string = '';
    l4Slot5:string = '';
    l4Slot6:string = '';
    l4Slot7:string = '';
    l4Slot8:string = '';
    l4Slot9:string = '';
    l4Slot10:string = '';
    l4Slot11:string = '';
    l4Slot12:string = '';
    l4Slot1Tick:boolean = false;
    l4Slot2Tick:boolean = false;
    l4Slot3Tick:boolean = false;
    l4Slot4Tick:boolean = false;
    l4Slot5Tick:boolean = false;
    l4Slot6Tick:boolean = false;
    l4Slot7Tick:boolean = false;
    l4Slot8Tick:boolean = false;
    l4Slot9Tick:boolean = false;
    l4Slot10Tick:boolean = false;
    l4Slot11Tick:boolean = false;
    l4Slot12Tick:boolean = false;

     //level five spells
   l5SpellSlotTotal: string = '';
   l5SpellSlotExpended: string = '';
   l5Slot1:string = '';
   l5Slot2:string = '';
   l5Slot3:string = '';
   l5Slot4:string = '';
   l5Slot5:string = '';
   l5Slot6:string = '';
   l5Slot7:string = '';
   l5Slot8:string = '';
   l5Slot9:string = '';
   l5Slot10:string = '';
   l5Slot11:string = '';
   l5Slot12:string = '';
   l5Slot1Tick:boolean = false;
   l5Slot2Tick:boolean = false;
   l5Slot3Tick:boolean = false;
   l5Slot4Tick:boolean = false;
   l5Slot5Tick:boolean = false;
   l5Slot6Tick:boolean = false;
   l5Slot7Tick:boolean = false;
   l5Slot8Tick:boolean = false;
   l5Slot9Tick:boolean = false;
   l5Slot10Tick:boolean = false;
   l5Slot11Tick:boolean = false;
   l5Slot12Tick:boolean = false;

    //level six spells
    l6SpellSlotTotal: string = '';
    l6SpellSlotExpended: string = '';
    l6Slot1:string = '';
    l6Slot2:string = '';
    l6Slot3:string = '';
    l6Slot4:string = '';
    l6Slot5:string = '';
    l6Slot6:string = '';
    l6Slot7:string = '';
    l6Slot8:string = '';
    l6Slot9:string = '';
    l6Slot10:string = '';
    l6Slot11:string = '';
    l6Slot12:string = '';
    l6Slot1Tick:boolean = false;
    l6Slot2Tick:boolean = false;
    l6Slot3Tick:boolean = false;
    l6Slot4Tick:boolean = false;
    l6Slot5Tick:boolean = false;
    l6Slot6Tick:boolean = false;
    l6Slot7Tick:boolean = false;
    l6Slot8Tick:boolean = false;
    l6Slot9Tick:boolean = false;
    l6Slot10Tick:boolean = false;
    l6Slot11Tick:boolean = false;
    l6Slot12Tick:boolean = false;

     //level seven spells
   l7SpellSlotTotal: string = '';
   l7SpellSlotExpended: string = '';
   l7Slot1:string = '';
   l7Slot2:string = '';
   l7Slot3:string = '';
   l7Slot4:string = '';
   l7Slot5:string = '';
   l7Slot6:string = '';
   l7Slot7:string = '';
   l7Slot8:string = '';
   l7Slot9:string = '';
   l7Slot10:string = '';
   l7Slot11:string = '';
   l7Slot12:string = '';
   l7Slot1Tick:boolean = false;
   l7Slot2Tick:boolean = false;
   l7Slot3Tick:boolean = false;
   l7Slot4Tick:boolean = false;
   l7Slot5Tick:boolean = false;
   l7Slot6Tick:boolean = false;
   l7Slot7Tick:boolean = false;
   l7Slot8Tick:boolean = false;
   l7Slot9Tick:boolean = false;
   l7Slot10Tick:boolean = false;
   l7Slot11Tick:boolean = false;
   l7Slot12Tick:boolean = false;

    //level eight spells
    l8SpellSlotTotal: string = '';
    l8SpellSlotExpended: string = '';
    l8Slot1:string = '';
    l8Slot2:string = '';
    l8Slot3:string = '';
    l8Slot4:string = '';
    l8Slot5:string = '';
    l8Slot6:string = '';
    l8Slot7:string = '';
    l8Slot8:string = '';
    l8Slot9:string = '';
    l8Slot10:string = '';
    l8Slot11:string = '';
    l8Slot12:string = '';
    l8Slot1Tick:boolean = false;
    l8Slot2Tick:boolean = false;
    l8Slot3Tick:boolean = false;
    l8Slot4Tick:boolean = false;
    l8Slot5Tick:boolean = false;
    l8Slot6Tick:boolean = false;
    l8Slot7Tick:boolean = false;
    l8Slot8Tick:boolean = false;
    l8Slot9Tick:boolean = false;
    l8Slot10Tick:boolean = false;
    l8Slot11Tick:boolean = false;
    l8Slot12Tick:boolean = false;

     //level nine spells
   l9SpellSlotTotal: string = '';
   l9SpellSlotExpended: string = '';
   l9Slot1:string = '';
   l9Slot2:string = '';
   l9Slot3:string = '';
   l9Slot4:string = '';
   l9Slot5:string = '';
   l9Slot6:string = '';
   l9Slot7:string = '';
   l9Slot8:string = '';
   l9Slot9:string = '';
   l9Slot10:string = '';
   l9Slot11:string = '';
   l9Slot12:string = '';
   l9Slot1Tick:boolean = false;
   l9Slot2Tick:boolean = false;
   l9Slot3Tick:boolean = false;
   l9Slot4Tick:boolean = false;
   l9Slot5Tick:boolean = false;
   l9Slot6Tick:boolean = false;
   l9Slot7Tick:boolean = false;
   l9Slot8Tick:boolean = false;
   l9Slot9Tick:boolean = false;
   l9Slot10Tick:boolean = false;
   l9Slot11Tick:boolean = false;
   l9Slot12Tick:boolean = false;

  constructor(private characterSheetService: CharacterSheetService) { }

  ngOnInit(): void {
    //header
  this.spellCastingClass = this.characterSheetService.characterSheet.spellPanel.spellCastingClass;
   this.spellCastingAbility = this.characterSheetService.characterSheet.spellPanel.spellCastingAbility;
   this.spellSaveDC = this.characterSheetService.characterSheet.spellPanel.spellSaveDC; 
   this.spellAttackBonus = this.characterSheetService.characterSheet.spellPanel.spellAttackBonus; 
   //cantrips
   this.cantripOne = this.characterSheetService.characterSheet.spellPanel.cantripOne;
   this.cantripTwo = this.characterSheetService.characterSheet.spellPanel.cantripTwo;
   this.cantripThree = this.characterSheetService.characterSheet.spellPanel.cantripThree;
   this.cantripFore = this.characterSheetService.characterSheet.spellPanel.cantripFore;
   this.cantripFive = this.characterSheetService.characterSheet.spellPanel.cantripFive;
   this.cantripSix = this.characterSheetService.characterSheet.spellPanel.cantripSix;
   this.cantripSeven = this.characterSheetService.characterSheet.spellPanel.cantripSeven;
   this.cantripEight = this.characterSheetService.characterSheet.spellPanel.cantripEight;

   //level one spells
   this.l1SpellSlotTotal = this.characterSheetService.characterSheet.spellPanel.l1SpellSlotTotal;
   this.l1SpellSlotExpended = this.characterSheetService.characterSheet.spellPanel.l1SpellSlotExpended;
   this.l1Slot1 = this.characterSheetService.characterSheet.spellPanel.l1Slot1;
   this.l1Slot2 = this.characterSheetService.characterSheet.spellPanel.l1Slot2;
   this.l1Slot3 = this.characterSheetService.characterSheet.spellPanel.l1Slot3;
   this.l1Slot4 = this.characterSheetService.characterSheet.spellPanel.l1Slot4;
   this.l1Slot5 = this.characterSheetService.characterSheet.spellPanel.l1Slot5;
   this.l1Slot6 = this.characterSheetService.characterSheet.spellPanel.l1Slot6;
   this.l1Slot7 = this.characterSheetService.characterSheet.spellPanel.l1Slot7;
   this.l1Slot8 = this.characterSheetService.characterSheet.spellPanel.l1Slot8;
   this.l1Slot9 = this.characterSheetService.characterSheet.spellPanel.l1Slot9;
   this.l1Slot10 = this.characterSheetService.characterSheet.spellPanel.l1Slot10;
   this.l1Slot11 = this.characterSheetService.characterSheet.spellPanel.l1Slot11;
   this.l1Slot12 = this.characterSheetService.characterSheet.spellPanel.l1Slot12;
   this.l1Slot1Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot1Tick;
   this.l1Slot2Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot2Tick;
   this.l1Slot3Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot3Tick;
   this.l1Slot4Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot4Tick;
   this.l1Slot5Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot5Tick;
   this.l1Slot6Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot6Tick;
   this.l1Slot7Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot7Tick;
   this.l1Slot8Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot8Tick;
   this.l1Slot9Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot9Tick;
   this.l1Slot10Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot10Tick;
   this.l1Slot11Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot11Tick;
   this.l1Slot12Tick = this.characterSheetService.characterSheet.spellPanel.l1Slot12Tick;

    //level two spells
    this.l2SpellSlotTotal = this.characterSheetService.characterSheet.spellPanel.l2SpellSlotTotal;
    this.l2SpellSlotExpended = this.characterSheetService.characterSheet.spellPanel.l2SpellSlotExpended;
    this.l2Slot1 = this.characterSheetService.characterSheet.spellPanel.l2Slot1;
    this.l2Slot2 = this.characterSheetService.characterSheet.spellPanel.l2Slot2;
    this.l2Slot3 = this.characterSheetService.characterSheet.spellPanel.l2Slot3;
    this.l2Slot4 = this.characterSheetService.characterSheet.spellPanel.l2Slot4;
    this.l2Slot5 = this.characterSheetService.characterSheet.spellPanel.l2Slot5;
    this.l2Slot6 = this.characterSheetService.characterSheet.spellPanel.l2Slot6;
    this.l2Slot7 = this.characterSheetService.characterSheet.spellPanel.l2Slot7;
    this.l2Slot8 = this.characterSheetService.characterSheet.spellPanel.l2Slot8;
    this.l2Slot9 = this.characterSheetService.characterSheet.spellPanel.l2Slot9;
    this.l2Slot10 = this.characterSheetService.characterSheet.spellPanel.l2Slot10;
    this.l2Slot11 = this.characterSheetService.characterSheet.spellPanel.l2Slot11;
    this.l2Slot12 = this.characterSheetService.characterSheet.spellPanel.l2Slot12;
    this.l2Slot1Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot1Tick;
    this.l2Slot2Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot2Tick;
    this.l2Slot3Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot3Tick;
    this.l2Slot4Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot4Tick;
    this.l2Slot5Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot5Tick;
    this.l2Slot6Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot6Tick;
    this.l2Slot7Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot7Tick;
    this.l2Slot8Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot8Tick;
    this.l2Slot9Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot9Tick;
    this.l2Slot10Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot10Tick;
    this.l2Slot11Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot11Tick;
    this.l2Slot12Tick = this.characterSheetService.characterSheet.spellPanel.l2Slot12Tick;

     //level Three spells
   this.l3SpellSlotTotal = this.characterSheetService.characterSheet.spellPanel.l3SpellSlotTotal;
   this.l3SpellSlotExpended = this.characterSheetService.characterSheet.spellPanel.l3SpellSlotExpended;
   this.l3Slot1 = this.characterSheetService.characterSheet.spellPanel.l3Slot1;
   this.l3Slot2 = this.characterSheetService.characterSheet.spellPanel.l3Slot2;
   this.l3Slot3 = this.characterSheetService.characterSheet.spellPanel.l3Slot3;
   this.l3Slot4 = this.characterSheetService.characterSheet.spellPanel.l3Slot4;
   this.l3Slot5 = this.characterSheetService.characterSheet.spellPanel.l3Slot5;
   this.l3Slot6 = this.characterSheetService.characterSheet.spellPanel.l3Slot6;
   this.l3Slot7 = this.characterSheetService.characterSheet.spellPanel.l3Slot7;
   this.l3Slot8 = this.characterSheetService.characterSheet.spellPanel.l3Slot8;
   this.l3Slot9 = this.characterSheetService.characterSheet.spellPanel.l3Slot9;
   this.l3Slot10 = this.characterSheetService.characterSheet.spellPanel.l3Slot10;
   this.l3Slot11 = this.characterSheetService.characterSheet.spellPanel.l3Slot11;
   this.l3Slot12 = this.characterSheetService.characterSheet.spellPanel.l3Slot12;
   this.l3Slot1Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot1Tick;
   this.l3Slot2Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot2Tick;
   this.l3Slot3Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot3Tick;
   this.l3Slot4Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot4Tick;
   this.l3Slot5Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot5Tick;
   this.l3Slot6Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot6Tick;
   this.l3Slot7Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot7Tick;
   this.l3Slot8Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot8Tick;
   this.l3Slot9Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot9Tick;
   this.l3Slot10Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot10Tick;
   this.l3Slot11Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot11Tick;
   this.l3Slot12Tick = this.characterSheetService.characterSheet.spellPanel.l3Slot12Tick;

    //level four spells
    this.l4SpellSlotTotal = this.characterSheetService.characterSheet.spellPanel.l4SpellSlotTotal;
    this.l4SpellSlotExpended = this.characterSheetService.characterSheet.spellPanel.l4SpellSlotExpended;
    this.l4Slot1 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot2 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot3 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot4 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot5 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot6 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot7 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot8 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot9 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot10 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot11 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot12 = this.characterSheetService.characterSheet.spellPanel.l4Slot1;
    this.l4Slot1Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot1Tick;
    this.l4Slot2Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot2Tick;
    this.l4Slot3Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot3Tick;
    this.l4Slot4Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot4Tick;
    this.l4Slot5Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot5Tick;
    this.l4Slot6Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot6Tick;
    this.l4Slot7Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot7Tick;
    this.l4Slot8Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot8Tick;
    this.l4Slot9Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot9Tick;
    this.l4Slot10Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot10Tick;
    this.l4Slot11Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot11Tick;
    this.l4Slot12Tick = this.characterSheetService.characterSheet.spellPanel.l4Slot12Tick;

     //level five spells
   this.l5SpellSlotTotal = this.characterSheetService.characterSheet.spellPanel.l5SpellSlotTotal;
   this.l5SpellSlotExpended = this.characterSheetService.characterSheet.spellPanel.l5SpellSlotExpended;
   this.l5Slot1 = this.characterSheetService.characterSheet.spellPanel.l5Slot1;
   this.l5Slot2 = this.characterSheetService.characterSheet.spellPanel.l5Slot2;
   this.l5Slot3 = this.characterSheetService.characterSheet.spellPanel.l5Slot3;
   this.l5Slot4 = this.characterSheetService.characterSheet.spellPanel.l5Slot4;
   this.l5Slot5 = this.characterSheetService.characterSheet.spellPanel.l5Slot5;
   this.l5Slot6 = this.characterSheetService.characterSheet.spellPanel.l5Slot6;
   this.l5Slot7 = this.characterSheetService.characterSheet.spellPanel.l5Slot7;
   this.l5Slot8 = this.characterSheetService.characterSheet.spellPanel.l5Slot8;
   this.l5Slot9 = this.characterSheetService.characterSheet.spellPanel.l5Slot9;
   this.l5Slot10 = this.characterSheetService.characterSheet.spellPanel.l5Slot10;
   this.l5Slot11 = this.characterSheetService.characterSheet.spellPanel.l5Slot11;
   this.l5Slot12 = this.characterSheetService.characterSheet.spellPanel.l5Slot12;
   this.l5Slot1Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot1Tick;
   this.l5Slot2Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot2Tick;
   this.l5Slot3Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot3Tick;
   this.l5Slot4Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot4Tick;
   this.l5Slot5Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot5Tick;
   this.l5Slot6Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot6Tick;
   this.l5Slot7Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot7Tick;
   this.l5Slot8Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot8Tick;
   this.l5Slot9Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot9Tick;
   this.l5Slot10Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot10Tick;
   this.l5Slot11Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot11Tick;
   this.l5Slot12Tick = this.characterSheetService.characterSheet.spellPanel.l5Slot12Tick;

    //level six spells
    this.l6SpellSlotTotal = this.characterSheetService.characterSheet.spellPanel.l6SpellSlotTotal;
    this.l6SpellSlotExpended = this.characterSheetService.characterSheet.spellPanel.l6SpellSlotExpended;
    this.l6Slot1 = this.characterSheetService.characterSheet.spellPanel.l6Slot1;
    this.l6Slot2 = this.characterSheetService.characterSheet.spellPanel.l6Slot2;
    this.l6Slot3 = this.characterSheetService.characterSheet.spellPanel.l6Slot3;
    this.l6Slot4 = this.characterSheetService.characterSheet.spellPanel.l6Slot4;
    this.l6Slot5 = this.characterSheetService.characterSheet.spellPanel.l6Slot5;
    this.l6Slot6 = this.characterSheetService.characterSheet.spellPanel.l6Slot6;
    this.l6Slot7 = this.characterSheetService.characterSheet.spellPanel.l6Slot7;
    this.l6Slot8 = this.characterSheetService.characterSheet.spellPanel.l6Slot8;
    this.l6Slot9 = this.characterSheetService.characterSheet.spellPanel.l6Slot9;
    this.l6Slot10 = this.characterSheetService.characterSheet.spellPanel.l6Slot10;
    this.l6Slot11 = this.characterSheetService.characterSheet.spellPanel.l6Slot11;
    this.l6Slot12 = this.characterSheetService.characterSheet.spellPanel.l6Slot12;
    this.l6Slot1Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot1Tick;
    this.l6Slot2Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot2Tick;
    this.l6Slot3Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot3Tick;
    this.l6Slot4Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot4Tick;
    this.l6Slot5Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot5Tick;
    this.l6Slot6Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot6Tick;
    this.l6Slot7Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot7Tick;
    this.l6Slot8Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot8Tick;
    this.l6Slot9Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot9Tick;
    this.l6Slot10Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot10Tick;
    this.l6Slot11Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot11Tick;
    this.l6Slot12Tick = this.characterSheetService.characterSheet.spellPanel.l6Slot12Tick;

     //level seven spells
   this.l7SpellSlotTotal = this.characterSheetService.characterSheet.spellPanel.l7SpellSlotTotal;
   this.l7SpellSlotExpended = this.characterSheetService.characterSheet.spellPanel.l7SpellSlotExpended;
   this.l7Slot1 = this.characterSheetService.characterSheet.spellPanel.l7Slot1;
   this.l7Slot2 = this.characterSheetService.characterSheet.spellPanel.l7Slot2;
   this.l7Slot3 = this.characterSheetService.characterSheet.spellPanel.l7Slot3;
   this.l7Slot4 = this.characterSheetService.characterSheet.spellPanel.l7Slot4;
   this.l7Slot5 = this.characterSheetService.characterSheet.spellPanel.l7Slot5;
   this.l7Slot6 = this.characterSheetService.characterSheet.spellPanel.l7Slot6;
   this.l7Slot7 = this.characterSheetService.characterSheet.spellPanel.l7Slot7;
   this.l7Slot8 = this.characterSheetService.characterSheet.spellPanel.l7Slot8;
   this.l7Slot9 = this.characterSheetService.characterSheet.spellPanel.l7Slot9;
   this.l7Slot10 = this.characterSheetService.characterSheet.spellPanel.l7Slot10;
   this.l7Slot11 = this.characterSheetService.characterSheet.spellPanel.l7Slot11;
   this.l7Slot12 = this.characterSheetService.characterSheet.spellPanel.l7Slot12;
   this.l7Slot1Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot1Tick;
   this.l7Slot2Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot2Tick;
   this.l7Slot3Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot3Tick;
   this.l7Slot4Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot4Tick;
   this.l7Slot5Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot5Tick;
   this.l7Slot6Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot6Tick;
   this.l7Slot7Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot7Tick;
   this.l7Slot8Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot8Tick;
   this.l7Slot9Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot9Tick;
   this.l7Slot10Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot10Tick;
   this.l7Slot11Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot11Tick;
   this.l7Slot12Tick = this.characterSheetService.characterSheet.spellPanel.l7Slot12Tick;

    //level eight spells
    this.l8SpellSlotTotal = this.characterSheetService.characterSheet.spellPanel.l8SpellSlotTotal;
    this.l8SpellSlotExpended = this.characterSheetService.characterSheet.spellPanel.l8SpellSlotExpended;
    this.l8Slot1 = this.characterSheetService.characterSheet.spellPanel.l8Slot1;
    this.l8Slot2 = this.characterSheetService.characterSheet.spellPanel.l8Slot2;
    this.l8Slot3 = this.characterSheetService.characterSheet.spellPanel.l8Slot3;
    this.l8Slot4 = this.characterSheetService.characterSheet.spellPanel.l8Slot4;
    this.l8Slot5 = this.characterSheetService.characterSheet.spellPanel.l8Slot5;
    this.l8Slot6 = this.characterSheetService.characterSheet.spellPanel.l8Slot6;
    this.l8Slot7 = this.characterSheetService.characterSheet.spellPanel.l8Slot7;
    this.l8Slot8 = this.characterSheetService.characterSheet.spellPanel.l8Slot8;
    this.l8Slot9 = this.characterSheetService.characterSheet.spellPanel.l8Slot9;
    this.l8Slot10 = this.characterSheetService.characterSheet.spellPanel.l8Slot10;
    this.l8Slot11 = this.characterSheetService.characterSheet.spellPanel.l8Slot11;
    this.l8Slot12 = this.characterSheetService.characterSheet.spellPanel.l8Slot12;
    this.l8Slot1Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot1Tick;
    this.l8Slot2Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot2Tick;
    this.l8Slot3Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot3Tick;
    this.l8Slot4Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot4Tick;
    this.l8Slot5Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot5Tick;
    this.l8Slot6Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot6Tick;
    this.l8Slot7Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot7Tick;
    this.l8Slot8Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot8Tick;
    this.l8Slot9Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot9Tick;
    this.l8Slot10Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot10Tick;
    this.l8Slot11Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot11Tick;
    this.l8Slot12Tick = this.characterSheetService.characterSheet.spellPanel.l8Slot12Tick;

     //level nine spells
   this.l9SpellSlotTotal = this.characterSheetService.characterSheet.spellPanel.l9SpellSlotTotal;
   this.l9SpellSlotExpended = this.characterSheetService.characterSheet.spellPanel.l9SpellSlotExpended;
   this.l9Slot1 = this.characterSheetService.characterSheet.spellPanel.l9Slot1;
   this.l9Slot2 = this.characterSheetService.characterSheet.spellPanel.l9Slot2;
   this.l9Slot3 = this.characterSheetService.characterSheet.spellPanel.l9Slot3;
   this.l9Slot4 = this.characterSheetService.characterSheet.spellPanel.l9Slot4;
   this.l9Slot5 = this.characterSheetService.characterSheet.spellPanel.l9Slot5;
   this.l9Slot6 = this.characterSheetService.characterSheet.spellPanel.l9Slot6;
   this.l9Slot7 = this.characterSheetService.characterSheet.spellPanel.l9Slot7;
   this.l9Slot8 = this.characterSheetService.characterSheet.spellPanel.l9Slot8;
   this.l9Slot9 = this.characterSheetService.characterSheet.spellPanel.l9Slot9;
   this.l9Slot10 = this.characterSheetService.characterSheet.spellPanel.l9Slot10;
   this.l9Slot11 = this.characterSheetService.characterSheet.spellPanel.l9Slot11;
   this.l9Slot12 = this.characterSheetService.characterSheet.spellPanel.l9Slot12;
   this.l9Slot1Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot1Tick;
   this.l9Slot2Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot2Tick;
   this.l9Slot3Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot3Tick;
   this.l9Slot4Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot4Tick;
   this.l9Slot5Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot5Tick;
   this.l9Slot6Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot6Tick;
   this.l9Slot7Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot7Tick;
   this.l9Slot8Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot8Tick;
   this.l9Slot9Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot9Tick;
   this.l9Slot10Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot10Tick;
   this.l9Slot11Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot11Tick;
   this.l9Slot12Tick = this.characterSheetService.characterSheet.spellPanel.l9Slot12Tick;
  }


}
