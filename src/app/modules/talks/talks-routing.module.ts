import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalksComponent } from '../../talks/talks.component';
const routes: Routes = [
  {
    path: '',
    component: TalksComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalksRoutingModule { }