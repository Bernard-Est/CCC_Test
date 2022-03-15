import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from 'src/app/Core/material.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule
  ],

})
export class EmployeeModule { }
