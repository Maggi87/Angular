import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.module').then(mod => mod.CustomerModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./order/order.module').then(mod => mod.OrderModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
