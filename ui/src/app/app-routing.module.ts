import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersheetComponent } from './charactersheet/charactersheet.component';

const routes: Routes = [
  {
    path: 'charactersheet',
    component: CharactersheetComponent
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/modules/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
