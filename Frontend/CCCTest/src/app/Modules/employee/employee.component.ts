import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DepartementService } from 'src/app/Core/departement.service';
import { Employee, EmployeeService, GetEmployee } from 'src/app/Core/employee.service';
import { DataTableColumn } from 'src/app/Shared/data-table-columns/data-table-columns';
import { TableActions } from 'src/app/Shared/table-actions/table-actions';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  ListOfEmployee: GetEmployee[] = []
  DepartmentName: string = ''

  ngOnInit(): void {
    this.GetAllEmployee()
  }

   tableColumns: DataTableColumn[] = [
    { name: 'id', display: 'Id' },
    { name: 'name', display: 'Name' },
    { name: 'email', display: 'Email' },
    { name: 'address', display: 'Address' },
    { name: 'departementName', display: 'Department' },
    {name: 'actions' , display: ''}
  ];

  tableActions: TableActions[] = [TableActions.edit,TableActions.delete];

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) { }


  GetAllEmployee() {
    this.employeeService.GetAll().subscribe(result => {
      debugger
      this.ListOfEmployee = result;
      console.log(this.ListOfEmployee)
    })

  }

  AddEmployee(obj : Object) {
    debugger
    const dialofRef = this.dialog.open(AddEmployeeComponent, {
      width: '500px',
      data: { obj: this.ListOfEmployee , event: obj }

    })
  }


  Delete(obj: any) {
    debugger
    this.employeeService.DeleteEmployee(obj.id).subscribe(data => {
      if (data) {
        this.ListOfEmployee.splice(obj.id, 1);
      }
    });
  }
}


