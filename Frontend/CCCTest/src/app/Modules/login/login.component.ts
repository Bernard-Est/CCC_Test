import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Core/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = ""
  password: string = ""

  constructor(private router: Router, private toastr : ToastService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username == "admin" && this.password=="admin"){
      localStorage.removeItem("Username")
      this.router.navigateByUrl('/Home').then()
      localStorage.setItem("Username",this.username)
      this.toastr.showSuccess("Welcome Admin")
    }else if(this.username == "user" && this.password=="user"){
      localStorage.removeItem("Username")
      this.router.navigateByUrl('/Home').then()
      localStorage.setItem("Username",this.username)
      this.toastr.showSuccess("Welcome User")
    }else{
      this.toastr.showError("Enter a valid username/password")
    }
  }
}
