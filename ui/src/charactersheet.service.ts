import { Injectable } from '@angular/core';
import { CharacterSheet } from './app/models/CharacterSheet';

@Injectable({
  providedIn: 'root'
})
export class CharactersheetService {

  characterSheet: CharacterSheet = {
    descriptionPanel: {
      classlevel: '',
      background: '',
      playername: '',
      faction: '',
      race: '',
      alignment: '',
      exp: 0
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
    }
  };

  constructor() { }

  printCharacter(): void {
    console.log(JSON.stringify(this.characterSheet));
  }
}
