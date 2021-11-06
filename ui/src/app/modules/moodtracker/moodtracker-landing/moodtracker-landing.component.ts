import { Component, OnInit } from '@angular/core';
import { MoodPoint } from 'src/app/models/MoodPoint';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-moodtracker-landing',
  templateUrl: './moodtracker-landing.component.html',
  styleUrls: ['./moodtracker-landing.component.scss']
})
export class MoodtrackerLandingComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  // variable for the model we're going to use.
  dailyMood!: MoodPoint;

  ngOnInit(): void {
    // instantiate the variable with defaults based on their data type.
    // (mood and moodText are strings, so we just use empty string '' to make sure its not null or undefined)
    this.dailyMood = {
      mood: '',
      moodText: ''
    };
  }
  
  /* This method can be removed, since we used a simplified two-way binding, this is not necessary */
  // updateMoodText(val : string): void {
  //   this.characterSheetService.moodPoint.moodText = val
  // }


  saveMoodPoint(mood : string): void {
    // if (mood == "happy"){
    //   this.characterSheetService.moodPoint.mood = "happy"
    // }
    // if (mood == "sad"){
    //   this.characterSheetService.moodPoint.mood = "sad"
    // }
    // if (mood == "mad"){
    //   this.characterSheetService.moodPoint.mood = "mad"
    // }

    /* those if statements are redundant, the mood string has the actual text you're assigning, we can just set it directly to a variable */
    this.dailyMood.mood = mood;

    /* printing out the object before we send it over */
    console.log(JSON.parse(JSON.stringify(this.dailyMood)));

    this.httpService.saveMood(this.dailyMood).subscribe((backendMessage: any) => {
      console.log('Backend message: ' + backendMessage);
    });
  }
}
