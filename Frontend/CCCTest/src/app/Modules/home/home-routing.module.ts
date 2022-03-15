import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent , children:[
    { path: 'employee', loadChildren: () => import('../../Modules/employee/employee.module').then(m => m.EmployeeModule) },
    { path: 'expenses', loadChildren: () => import('../../Modules/expenses/expenses.module').then(m => m.ExpensesModule) },
    { path: 'leave', loadChildren: () => import('../../Modules/leave/leave.module').then(m => m.LeaveModule) }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
