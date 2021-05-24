import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersheetComponent } from './charactersheet/charactersheet.component';

const routes: Routes = [
  { path: 'charactersheet', component: CharactersheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
