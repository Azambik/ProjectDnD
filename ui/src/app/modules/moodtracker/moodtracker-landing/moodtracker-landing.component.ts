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

  dailyMood!: MoodPoint;

  ngOnInit(): void {
  }

  saveMoodPoint(): void {
    console.log(JSON.parse(JSON.stringify(this.dailyMood)));
    this.httpService.saveMood(this.dailyMood);
  }

}
