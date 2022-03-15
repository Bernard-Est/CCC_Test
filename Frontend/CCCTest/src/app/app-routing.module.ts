import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule) },
{ path: 'Login', loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule) }, 
{ path: 'Home', loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
