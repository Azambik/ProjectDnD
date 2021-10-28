import { Injectable } from '@angular/core';
import { MoodPoint } from './app/models/MoodPoint';
@Injectable({
  providedIn: 'root'
})
export class CharacterSheetService {

  moodPoint: MoodPoint = {
    mood: '',
    moodText: ''
  };

  constructor() { }

  printCharacter(): void {
    console.log(JSON.stringify(this.moodPoint));
  }
}
