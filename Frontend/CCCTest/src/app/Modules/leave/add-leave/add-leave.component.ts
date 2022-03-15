import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeaveType, LeaveTypeService } from 'src/app/Core/leave-type.service';
import { LeaveAdd, LeaveService } from 'src/app/Core/leave.service';
import { ToastService } from 'src/app/Core/toast.service';
import { LeaveComponent } from '../leave.component';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.scss']
})
export class AddLeaveComponent implements OnInit {
  from !: Date
  to !: Date
  leaveTypeId : number = 0
  numberOfDays : number = 0
  notes : string = ''

  leaveTypes: LeaveType[] = []

  constructor(public dialogRef: MatDialogRef<LeaveComponent>,private leaveType : LeaveTypeService, private toastr: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any, private leaveService : LeaveService) { }

  ngOnInit(): void {
    this.GetAllLeaveType()
  }

  ManageLeave(){
    var leav: LeaveAdd = {from: this.from, to:this.to, leaveTypeId:this.leaveTypeId, numberOfDays:this.numberOfDays, notes:this.notes}
    if(this.data){
      this.leaveService.UpdateLeave(leav).subscribe(d=>{
        if(d){
          this.toastr.showSuccess("Leave request updated Successfully")
          this.dialogRef.close();
        }
      })
    }else{
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
