import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodtrackerLandingComponent } from './moodtracker-landing/moodtracker-landing.component';

const routes: Routes = [
  {
    path: '',
    component: MoodtrackerLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoodtrackerRoutingModule { }
