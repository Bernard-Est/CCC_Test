import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from 'src/app/Core/material.module';


@NgModule({
  declarations: [
    ExpensesComponent,
    AddExpensesComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    MaterialModule
  ]
})
export class ExpensesModule { }
