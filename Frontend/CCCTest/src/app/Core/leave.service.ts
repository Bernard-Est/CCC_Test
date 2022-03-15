import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseEntity } from './baseEntity';
import { LeaveType } from './leave-type.service';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  baseUrl = environment.baseUrl + "/Leave"

  constructor(private httpClient : HttpClient) { }

  GetById(Id:number):Observable<Leave>{
    return this.httpClient.get<Leave>(this.baseUrl + `/${Id}`)
  }

  GetAll(): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(this.baseUrl + `/All`)
  }

  AddLeave(leave: LeaveAdd) : Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl , leave)
  }

  UpdateLeave(leave: LeaveAdd) : Observable<boolean>{
    return this.httpClient.put<boolean>(this.baseUrl , leave)
  }

  DeleteLeave(Id:number) : Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl + `/delete` , Id)
  }
}

export interface Leave {
  from: string;
  to: string;
  numberOfDays: number;
  notes: string;
  leaveType: LeaveType;
}

export interface LeaveAdd {
  from: Date;
  to: Date;
  numberOfDays: number;
  notes: string;
  leaveTypeId : number
}
