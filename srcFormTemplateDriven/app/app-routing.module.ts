import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path : 'template', component:TemplateDrivenComponent },
 
  { path : '**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
