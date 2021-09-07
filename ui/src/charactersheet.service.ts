import { Injectable } from '@angular/core';
import { CharacterSheet } from './app/models/CharacterSheet';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetService {

  characterSheet: CharacterSheet = {
    descriptionPanel: {
      characterName: '',
      classLevel: '',
      background: '',
      playerName: '',
      faction: '',
      race: '',
      alignment: '',
      exp: 0,
      age: 0,
      height: '',
      weight:  '',
      eyes:  '',
      skin:  '',
      hair:  ''
    },
    statPanel: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    skillSavePanel: {
      inspiration: 0,
      proficiencyBonus: 0,
      strengthSave: 0,
      dexteritySave: 0,
      constitutionSave: 0,
      intelligenceSave: 0,
      wisdomSave: 0,
      charismaSave: 0,
      strengthTick: false,
      dexterityTick: false,
      constitutionTick: false,
      intelligenceTick: false,
      wisdomTick: false,
      charismaTick: false
    },
    skillPanel: {
      acrobatics: 0,
      animalHandling: 0,
      arcana: 0,
      athletics: 0,
      deception: 0,
      history: 0,
      insight: 0,
      intimidation: 0,
      investigation: 0,
      medicine: 0,
      nature: 0,
      perception: 0,
      performance: 0,
      persuasion: 0,
      religion: 0,
      slightOfHand: 0,
      stealth: 0,
      survival: 0,
      acrobaticsTick: false,
      animalHandlingTick: false,
      arcanaTick: false,
      athleticsTick: false,
      deceptionTick: false,
      historyTick: false,
      insightTick: false,
      intimidationTick: false,
      investigationTick: false,
      medicineTick: false,
      natureTick: false,
      perceptionTick: false,
      performanceTick: false,
      persuasionTick: false,
      religionTick: false,
      slightOfHandTick: false,
      stealthTick: false,
      survivalTick: false
    },
    combatPanel: {
      armorClass: 0,
      initiative: 0,
      speed: 0,
      hitPointMaximum: 0,
      currentHitPoints: 0,
      temporaryHitPoint: 0,
      hitDie: ''
    },
    attackPanel: {
      attackOne: '',
      attackBonusOne: '',
      attackTypeOne: '',
      attackTwo: '',
      attackBonusTwo: '',
      attackTypeTwo: '',
      attackThree: '',
      attackBonusThree: '',
      attackTypeThree: '',
      attackFour: '',
      attackBonusFour: '',
      attackTypeFour: '',
      attackDescription: ''
    },
    personalityPanel: {
      personalityTraits: '',
      ideals: '',
      bonds: '',
      flaws: '',
    },
    equipmentPanel: {
      equipment: '',
      copperPoints: 0,
      silverPoints: 0,
      electrumPoints: 0,
      goldPoints: 0,
      platinumPoints:0
  }
  };

  constructor() { }

  printCharacter(): void {
    console.log(JSON.stringify(this.characterSheet));
  }
}
