import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {

  }
  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  navMenu: any[] = []

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    .`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route : Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.SetNavigation()
  }

  SetNavigation(){
    if(localStorage.getItem("Username") == "user"){
      this.navMenu = [
        {Title : "Leave" , Route : "/Home/leave"},
        {Title : "Expenses" , Route : "/Home/expenses"}
      ]
    }else if(localStorage.getItem("Username") == "admin"){
      this.navMenu = [
        {Title : "Employees" , Route : "/Home/employee"},
        {Title : "List Leaves" , Route : "/Home/leave"},
        {Title : "List Expenses" , Route : "/Home/expenses"}
      ]
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout(){
    this.route.navigateByUrl('/Login').then()
  }
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}


