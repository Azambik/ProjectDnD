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
      strength: 0
    },
    skillSavePanel: {

    }
  };

  constructor() { }

  printCharacter(): void {
    console.log(JSON.stringify(this.characterSheet));
  }
}
