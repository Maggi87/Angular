import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {  path : 'user/:id/:name', component: UsersComponent  },
  {  path : 'user', component: UsersComponent  },
  {  path : 'server', component: ServersComponent},
  {  path : 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
