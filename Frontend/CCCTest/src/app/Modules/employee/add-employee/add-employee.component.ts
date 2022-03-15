import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartementService, Department } from 'src/app/Core/departement.service';
import { AddEmployee, Employee, EmployeeService } from 'src/app/Core/employee.service';
import { ToastService } from 'src/app/Core/toast.service';
import { EmployeeComponent } from '../employee.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  name : string = ''
  email: string = ''
  address : string = ''
  departmentId : number = 0
  departments : Department[] = []

  constructor(public dialogRef: MatDialogRef<EmployeeComponent>, private employeeService: EmployeeService,private toastr: ToastService
  , private department : DepartementService, @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.GetAllDepartments()
  }

  ManageEmployee(){
    var emp: AddEmployee = {name: this.name, email:this.email, address:this.address, departmentId:this.departmentId}
    if(this.data){
      this.employeeService.UpdateEmployee(emp).subscribe(d=>{
        if(d){
          this.toastr.showSuccess("Employee Added Successfully")
          this.dialogRef.close();
        }
      })
    }else{
      this.employeeService.AddEmployee(emp).subscribe(d=>{
        if(d){
          this.toastr.showSuccess("Employee Added Successfully")
          this.dialogRef.close();
        }
      })
    }
  }

  GetAllDepartments(){
    this.department.GetAll().subscribe(result => {
      this.departments = result
    })
  }


  close(){
    this.dialogRef.close();
  }

}
