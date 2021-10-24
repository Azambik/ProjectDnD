import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoodtrackerRoutingModule } from './moodtracker-routing.module';
import { MoodtrackerLandingComponent } from './moodtracker-landing/moodtracker-landing.component';


@NgModule({
  declarations: [
    MoodtrackerLandingComponent
  ],
  imports: [
    CommonModule,
    MoodtrackerRoutingModule
  ]
})
export class MoodtrackerModule { }
