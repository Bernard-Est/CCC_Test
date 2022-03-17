import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee, EmployeeService, GetEmployee } from 'src/app/Core/employee.service';
import { filterGetLeave, Leave, LeaveGet, LeaveService } from 'src/app/Core/leave.service';
import { DataTableColumn } from 'src/app/Shared/data-table-columns/data-table-columns';
import { TableActions } from 'src/app/Shared/table-actions/table-actions';
import { AddLeaveComponent } from './add-leave/add-leave.component';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  ListOfLeave : LeaveGet[] = []
  isUser : boolean = false
  FromFilter?: Date;
  ToFilter?: Date;
  constructor(private leaveService: LeaveService,private dialog: MatDialog, private employeService: EmployeeService) { }

  tableColumns: DataTableColumn[] = [
    { name: 'id', display: 'Id' },
    { name: 'from', display: 'From', type:'date' },
    { name: 'to', display: 'To', type:'date' },
    { name: 'numberOfDays', display: 'Number Of Days' },
    { name: 'leaveType', display: 'Leave Type' },
    {name: 'actions', display:''}
  ];

  tableActions: TableActions[] = [TableActions.edit,TableActions.delete];

  pipe = new DatePipe('en-LBP');
  ListOfEmployee : GetEmployee[] = []
  ListFiltersLeave : LeaveGet[] = []

  ngOnInit(): void {
    if(localStorage.getItem("Username") == "admin"){
      this.isUser = false
    }else{
      this.isUser = true
    }
    this.GetAllLeave()
  }

  GetAllLeave() {
    this.leaveService.GetAll().subscribe(result => {
      this.ListOfLeave = result
    })
  }

  AddLeave(obj : Object){
    const dialofRef = this.dialog.open(AddLeaveComponent, {
      width: '500px',
      data: { obj: this.ListOfLeave , event: obj}
    })
  }

  Delete(id: number) {
    this.leaveService.DeleteLeave(id).subscribe(data => {
      if (data) {
        this.ListOfLeave.splice(id, 1);
      }
    });
  }

  GetFilterLeave(){
    // var f = new filterGetLeave()
    // f.from = this.FromFilter
    // f.to = this.ToFilter
    this.leaveService.FilterGetLeave(this.FromFilter, this.ToFilter,1).subscribe(res => {
      this.ListFiltersLeave = res
    })
  }

  GetAllEmployee(){
    this.employeService.GetAll().subscribe(result => {
      this.ListOfEmployee = result;
    })
  }

}

// Request a leave by the user by pressing the button and fill the info
// Getting all the info of the Leaves
// Searching and getting the name of any property of the datatable
// Filtering by date from - to and by employee
// Update the Leaves by id , and delete
// using date pipe to format the date from datetime
// using datatable shared componenet

// Need :
    // Employee dropdown don't contain data because system is missing the authentication by employee to get his/her credentials
    // and then we can get like we are getting the info of the user and filter by employee
    // so I'm setting all time the employeeId = 1 although all filters are nullable.
