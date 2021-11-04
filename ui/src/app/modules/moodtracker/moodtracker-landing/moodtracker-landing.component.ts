import { Component, OnInit } from '@angular/core';
import { MoodPoint } from 'src/app/models/MoodPoint';
import { HttpService } from 'src/app/services/http.service';
import { CharacterSheetService } from 'src/charactersheet.service';
@Component({
  selector: 'app-moodtracker-landing',
  templateUrl: './moodtracker-landing.component.html',
  styleUrls: ['./moodtracker-landing.component.scss']
})
export class MoodtrackerLandingComponent implements OnInit {
  moodText: string = "";
  constructor(private httpService: HttpService, private characterSheetService: CharacterSheetService) { }
  
  dailyMood!: MoodPoint;
  ngOnInit(): void {
    this.moodText = this.characterSheetService.moodPoint.moodText;
  }
  updateMoodText(val : string): void {
    this.characterSheetService.moodPoint.moodText = val
  }
  saveMoodPoint(mood : string): void {
    if (mood == "happy"){
      this.characterSheetService.moodPoint.mood = "happy"
    }
    if (mood == "sad"){
      this.characterSheetService.moodPoint.mood = "sad"
    }
    if (mood == "mad"){
      this.characterSheetService.moodPoint.mood = "mad"
    }
    
    this.characterSheetService.printCharacter();
    console.log(JSON.parse(JSON.stringify(this.dailyMood)));
    this.httpService.saveMood(this.dailyMood);
    
  }

}
