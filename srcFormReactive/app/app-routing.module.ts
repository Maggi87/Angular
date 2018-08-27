import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveComponent } from './reactive/reactive.component';


const routes: Routes = [
  { path : 'reactive', component:ReactiveComponent},
 
  { path : '**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
