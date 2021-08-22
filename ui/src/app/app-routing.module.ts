import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { characterSheetComponent } from './characterSheet/characterSheet.component';

const routes: Routes = [
  {
    path: 'characterSheet',
    component: characterSheetComponent
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
