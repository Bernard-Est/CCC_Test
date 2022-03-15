import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DepartementService } from 'src/app/Core/departement.service';
import { Employee, EmployeeService } from 'src/app/Core/employee.service';
import { DataTableColumn } from 'src/app/Shared/data-table-columns/data-table-columns';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  ListOfEmployee: Employee[] = []
  DepartmentName: string = ''

  ngOnInit(): void {
    this.GetAllEmployee()
  }

  tableColumns: DataTableColumn[] = [
    { name: 'id', display: 'Id' },
    { name: 'name', display: 'Name' },
    { name: 'email', display: 'Email' },
    { name: 'address', display: 'Address' },
    { name: 'departmentName', display: 'Department' }
  ];

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) { }


  GetAllEmployee() {
    this.employeeService.GetAll().subscribe(result => {
      debugger
      this.ListOfEmployee = result
      console.log(this.ListOfEmployee)
    })
  }

  AddEmployee() {
    const dialofRef = this.dialog.open(AddEmployeeComponent, {
      width: '500px',
      data: { obj: this.ListOfEmployee }
    })
  }
}


