import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartementService, Department } from 'src/app/Core/departement.service';
import { AddEmployee, Employee, EmployeeService, UpdateEmployee } from 'src/app/Core/employee.service';
import { ToastService } from 'src/app/Core/toast.service';
import { EmployeeComponent } from '../employee.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  Id: number = 0
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
    if(this.data.event){
      this.name = this.data.event.name
      this.email = this.data.event.email
      this.address = this.data.event.address
      this.departmentId = this.data.event.departmentId
    }
  }

  ManageEmployee(){
    if(this.data.event.id){
      var empUpd: UpdateEmployee = {Id: this.data.event.id , name: this.name, email:this.email, address:this.address, departmentId:this.departmentId}
      this.employeeService.UpdateEmployee(empUpd).subscribe(d=>{
        if(d){
          this.toastr.showSuccess("Employee Updated Successfully")
          this.dialogRef.close();
        }
      })
    }else{
      var emp: AddEmployee = {name: this.name, email:this.email, address:this.address, departmentId:this.departmentId}
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
