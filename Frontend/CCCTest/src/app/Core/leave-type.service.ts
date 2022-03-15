import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseEntity } from './baseEntity';
import { Leave } from './leave.service';

@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {

  baseUrl = environment.baseUrl + "/LeaveType"
  constructor(private httpClient : HttpClient) { }

  GetAll(): Observable<LeaveType[]>{
    return this.httpClient.get<LeaveType[]>(this.baseUrl)
  }
}

export interface LeaveType extends BaseEntity {
  leaveTypeId : number
  name: string;
  //leaves: Leave[];
}
