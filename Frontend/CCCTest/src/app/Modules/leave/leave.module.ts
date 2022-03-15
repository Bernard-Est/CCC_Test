import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { MaterialModule } from 'src/app/Core/material.module';


@NgModule({
  declarations: [
    LeaveComponent,
    AddLeaveComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    MaterialModule
  ]
})
export class LeaveModule { }
