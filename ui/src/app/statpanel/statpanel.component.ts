import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statpanel',
  templateUrl: './statpanel.component.html',
  styleUrls: ['./statpanel.component.scss']
})
export class StatpanelComponent implements OnInit {

  constructor() { }
  strength: number = 0;
  dexterity: number =0;
  constitution: number =0;
  intelligence: number =0;
  wisdom: number =0;
  charisma: number =0;
  strengthModifier: number = 0;
  dexterityModifier: number =0;
  constitutionModifier: number =0;
  intelligenceModifier: number =0;
  wisdomModifier: number =0;
  charismaModifier: number =0;

  strModifierCalc(strength: number){
    if(strength == 1) {
			this.strengthModifier = -5;
		}
		if(strength == 2 || strength == 3) {
			this.strengthModifier = -4;
		}
		if(strength == 4 || strength == 5) {
			this.strengthModifier = -3;
		}
		if(strength == 6 || strength == 7) {
			this.strengthModifier = -2;
		}
		if(strength == 8 || strength == 9) {
			this.strengthModifier = -1;
		}
		if(strength == 10 || strength == 11  ) {
			this.strengthModifier = 0;
		}
		if(strength == 12 || strength == 13  ) {
			this.strengthModifier = 1;
		}
		if(strength == 14 || strength == 15  ) {
			this.strengthModifier = 2;
		}
		if(strength == 16 || strength == 17  ) {
			this.strengthModifier = 3;
		}
		if(strength == 18 || strength == 19  ) {
			this.strengthModifier = 4;
		}
		if(strength == 20 || strength == 21  ) {
			this.strengthModifier = 5;
		}
		if(strength == 22 || strength == 23  ) {
			this.strengthModifier = 6;
		}
		if(strength == 24 || strength == 25  ) {
			this.strengthModifier = 7;
		}
		if(strength == 26 || strength == 27  ) {
			this.strengthModifier = 8;
		}
		if(strength == 28 || strength == 29  ) {
			this.strengthModifier = 9;
		}
		if(strength >= 30 ) {
			this.strengthModifier = 10;
		}
  }
  dexModifierCalc(dexterity: number){
    if(dexterity == 1) {
			this.dexterityModifier = -5;
		}
		if(dexterity == 2 || dexterity == 3) {
			this.dexterityModifier = -4;
		}
		if(dexterity == 4 || dexterity == 5) {
			this.dexterityModifier = -3;
		}
		if(dexterity == 6 || dexterity == 7) {
			this.dexterityModifier = -2;
		}
		if(dexterity == 8 || dexterity == 9) {
			this.dexterityModifier = -1;
		}
		if(dexterity == 10 || dexterity == 11  ) {
			this.dexterityModifier = 0;
		}
		if(dexterity == 12 || dexterity == 13  ) {
			this.dexterityModifier = 1;
		}
		if(dexterity == 14 || dexterity == 15  ) {
			this.dexterityModifier = 2;
		}
		if(dexterity == 16 || dexterity == 17  ) {
			this.dexterityModifier = 3;
		}
		if(dexterity == 18 || dexterity == 19  ) {
			this.dexterityModifier = 4;
		}
		if(dexterity == 20 || dexterity == 21  ) {
			this.dexterityModifier = 5;
		}
		if(dexterity == 22 || dexterity == 23  ) {
			this.dexterityModifier = 6;
		}
		if(dexterity == 24 || dexterity == 25  ) {
			this.dexterityModifier = 7;
		}
		if(dexterity == 26 || dexterity == 27  ) {
			this.dexterityModifier = 8;
		}
		if(dexterity == 28 || dexterity == 29  ) {
			this.dexterityModifier = 9;
		}
		if(dexterity >= 30 ) {
			this.dexterityModifier = 10;
		}
  }
  conModifierCalc(constitution: number){
    if(constitution == 1) {
			this.constitutionModifier = -5;
		}
		if(constitution == 2 || constitution == 3) {
			this.constitutionModifier = -4;
		}
		if(constitution == 4 || constitution == 5) {
			this.constitutionModifier = -3;
		}
		if(constitution == 6 || constitution == 7) {
			this.constitutionModifier = -2;
		}
		if(constitution == 8 || constitution == 9) {
			this.constitutionModifier = -1;
		}
		if(constitution == 10 || constitution == 11  ) {
			this.constitutionModifier = 0;
		}
		if(constitution == 12 || constitution == 13  ) {
			this.constitutionModifier = 1;
		}
		if(constitution == 14 || constitution == 15  ) {
			this.constitutionModifier = 2;
		}
		if(constitution == 16 || constitution == 17  ) {
			this.constitutionModifier = 3;
		}
		if(constitution == 18 || constitution == 19  ) {
			this.constitutionModifier = 4;
		}
		if(constitution == 20 || constitution == 21  ) {
			this.constitutionModifier = 5;
		}
		if(constitution == 22 || constitution == 23  ) {
			this.constitutionModifier = 6;
		}
		if(constitution == 24 || constitution == 25  ) {
			this.constitutionModifier = 7;
		}
		if(constitution == 26 || constitution == 27  ) {
			this.constitutionModifier = 8;
		}
		if(constitution == 28 || constitution == 29  ) {
			this.constitutionModifier = 9;
		}
		if(constitution >= 30 ) {
			this.constitutionModifier = 10;
		}
  }
  intModifierCalc(intelligence: number){
    if(intelligence == 1) {
			this.intelligenceModifier = -5;
		}
		if(intelligence  == 2 || intelligence  == 3) {
			this.intelligenceModifier = -4;
		}
		if(intelligence  == 4 || intelligence  == 5) {
			this.intelligenceModifier = -3;
		}
		if(intelligence  == 6 || intelligence  == 7) {
			this.intelligenceModifier = -2;
		}
		if(intelligence  == 8 || intelligence  == 9) {
			this.intelligenceModifier = -1;
		}
		if(intelligence  == 10 || intelligence  == 11  ) {
			this.intelligenceModifier = 0;
		}
		if(intelligence  == 12 || intelligence  == 13  ) {
			this.intelligenceModifier = 1;
		}
		if(intelligence  == 14 || intelligence  == 15  ) {
			this.intelligenceModifier = 2;
		}
		if(intelligence  == 16 || intelligence  == 17  ) {
			this.intelligenceModifier = 3;
		}
		if(intelligence  == 18 || intelligence  == 19  ) {
			this.intelligenceModifier = 4;
		}
		if(intelligence  == 20 || intelligence  == 21  ) {
			this.intelligenceModifier = 5;
		}
		if(intelligence  == 22 || intelligence  == 23  ) {
			this.intelligenceModifier = 6;
		}
		if(intelligence  == 24 || intelligence  == 25  ) {
			this.intelligenceModifier = 7;
		}
		if(intelligence  == 26 || intelligence  == 27  ) {
			this.intelligenceModifier = 8;
		}
		if(intelligence  == 28 || intelligence  == 29  ) {
			this.intelligenceModifier = 9;
		}
		if(intelligence  >= 30 ) {
			this.intelligenceModifier = 10;
		}
  }
  wisModifierCalc(wisdom: number){
    if(wisdom == 1) {
			this.wisdomModifier = -5;
		}
		if(wisdom == 2 || wisdom == 3) {
			this.wisdomModifier = -4;
		}
		if(wisdom == 4 || wisdom == 5) {
			this.wisdomModifier = -3;
		}
		if(wisdom == 6 || wisdom == 7) {
			this.wisdomModifier = -2;
		}
		if(wisdom == 8 || wisdom == 9) {
			this.wisdomModifier = -1;
		}
		if(wisdom == 10 || wisdom == 11  ) {
			this.wisdomModifier = 0;
		}
		if(wisdom == 12 || wisdom == 13  ) {
			this.wisdomModifier = 1;
		}
		if(wisdom == 14 || wisdom == 15  ) {
			this.wisdomModifier = 2;
		}
		if(wisdom == 16 || wisdom == 17  ) {
			this.wisdomModifier = 3;
		}
		if(wisdom == 18 || wisdom == 19  ) {
			this.wisdomModifier = 4;
		}
		if(wisdom == 20 || wisdom == 21  ) {
			this.wisdomModifier = 5;
		}
		if(wisdom == 22 || wisdom == 23  ) {
			this.wisdomModifier = 6;
		}
		if(wisdom == 24 || wisdom == 25  ) {
			this.wisdomModifier = 7;
		}
		if(wisdom == 26 || wisdom == 27  ) {
			this.wisdomModifier = 8;
		}
		if(wisdom == 28 || wisdom == 29  ) {
			this.wisdomModifier = 9;
		}
		if(wisdom >= 30 ) {
			this.wisdomModifier = 10;
		}
  }
  chrModifierCalc(charisma: number){
    if(charisma == 1) {
			this.charismaModifier = -5;
		}
		if(charisma == 2 || charisma == 3) {
			this.charismaModifier = -4;
		}
		if(charisma == 4 || charisma == 5) {
			this.charismaModifier = -3;
		}
		if(charisma == 6 || charisma == 7) {
			this.charismaModifier = -2;
		}
		if(charisma == 8 || charisma == 9) {
			this.charismaModifier = -1;
		}
		if(charisma == 10 || charisma == 11  ) {
			this.charismaModifier = 0;
		}
		if(charisma == 12 || charisma == 13  ) {
			this.charismaModifier = 1;
		}
		if(charisma == 14 || charisma == 15  ) {
			this.charismaModifier = 2;
		}
		if(charisma == 16 || charisma == 17  ) {
			this.charismaModifier = 3;
		}
		if(charisma == 18 || charisma == 19  ) {
			this.charismaModifier = 4;
		}
		if(charisma == 20 || charisma == 21  ) {
			this.charismaModifier = 5;
		}
		if(charisma == 22 || charisma == 23  ) {
			this.charismaModifier = 6;
		}
		if(charisma == 24 || charisma == 25  ) {
			this.charismaModifier = 7;
		}
		if(charisma == 26 || charisma == 27  ) {
			this.charismaModifier = 8;
		}
		if(charisma == 28 || charisma == 29  ) {
			this.charismaModifier = 9;
		}
		if(charisma >= 30 ) {
			this.charismaModifier = 10;
		}
  }


  ngOnInit(): void {
  }

}
