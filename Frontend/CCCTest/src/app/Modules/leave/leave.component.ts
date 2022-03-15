import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Leave, LeaveService } from 'src/app/Core/leave.service';
import { AddLeaveComponent } from './add-leave/add-leave.component';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  ListOfLeave : Leave[] = []
  isUser : boolean = false
  constructor(private leaveService: LeaveService,private dialog: MatDialog) { }

  ngOnInit(): void {
    if(localStorage.getItem("Username") == "user"){
      this.isUser == true
    }else{
      this.isUser == false
    }
    this.GetAllLeave()
  }

  GetAllLeave() {
    this.leaveService.GetAll().subscribe(result => {
      debugger
      this.ListOfLeave = result
      console.log(this.ListOfLeave)
    })
  }

  AddLeave(){
    const dialofRef = this.dialog.open(AddLeaveComponent, {
      width: '500px',
      data: { obj: this.ListOfLeave }
    })
  }

}
