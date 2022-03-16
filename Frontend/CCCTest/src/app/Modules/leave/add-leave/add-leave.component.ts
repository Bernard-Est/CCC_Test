import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaveType, LeaveTypeService } from 'src/app/Core/leave-type.service';
import { LeaveAdd, LeaveService, LeaveUpdate } from 'src/app/Core/leave.service';
import { ToastService } from 'src/app/Core/toast.service';
import { LeaveComponent } from '../leave.component';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.scss']
})
export class AddLeaveComponent implements OnInit {
  Id : number = 0
  from !: Date
  to !: Date
  leaveTypeId : number = 0
  numberOfDays : number = 0
  employeeId : number = 1
  notes : string = ''

  leaveTypes: LeaveType[] = []

  constructor(public dialogRef: MatDialogRef<LeaveComponent>,private leaveType : LeaveTypeService, private toastr: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any, private leaveService : LeaveService) { }

  ngOnInit(): void {
    this.GetAllLeaveType()
    if(this.data.event){
      this.Id = this.data.event.id
      this.from = this.data.event.from
      this.to = this.data.event.to
      this.numberOfDays = this.data.event.numberOfDays
      this.notes = this.data.event.notes
    }
  }

  DiffTheDate(){
    debugger
    let dateTo = new Date(this.to)
    let dateFrom = new Date(this.from)
    if(this.from != null && this.to != null && this.to > this.from){
      this.numberOfDays =  Math.floor((Date.UTC(dateTo.getFullYear(), dateTo.getMonth(), dateTo.getDate()) - Date.UTC(dateFrom.getFullYear(), dateFrom.getMonth(), dateFrom.getDate())) / (1000 * 3600 * 24))
    }
  }

  ManageLeave(){
debugger
    if(this.data.event.id){
      var leavee: LeaveUpdate = {Id: this.Id , from: this.from, to:this.to, leaveTypeId:this.leaveTypeId, numberOfDays:this.numberOfDays, notes:this.notes , employeeId: this.employeeId}
      this.leaveService.UpdateLeave(leavee).subscribe(d=>{
        if(d){
          this.toastr.showSuccess("Leave request updated Successfully")
          this.dialogRef.close();
        }
      })
    }else{
      var leav: LeaveAdd = {from: this.from, to:this.to, leaveTypeId:this.leaveTypeId, numberOfDays:this.numberOfDays, notes:this.notes, employeeId: this.employeeId}
      this.leaveService.AddLeave(leav).subscribe(d=>{
        if(d){
          this.toastr.showSuccess("Leave requested Successfully")
          this.dialogRef.close();
        }
      })
    }
  }

  GetAllLeaveType(){
    this.leaveType.GetAll().subscribe(result => {

      this.leaveTypes = result
    })
  }

  close(){
    this.dialogRef.close();
  }

}
