import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorksComponent } from './works/works.component';
const routes: Routes = [
  {path:'workers',component: WorksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
