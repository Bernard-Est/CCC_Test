import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseEntity } from './baseEntity';
import { Department } from './departement.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = environment.baseUrl + "/Employee"
  constructor(private httpClient : HttpClient) { }

GetById(Id:number):Observable<Employee>{
  return this.httpClient.get<Employee>(this.baseUrl + `/${Id}`)
}

GetAll(): Observable<GetEmployee[]>{
  return this.httpClient.get<GetEmployee[]>(this.baseUrl + `/All`)
}

AddEmployee(employee: AddEmployee) : Observable<boolean>{
  debugger
  return this.httpClient.post<boolean>(this.baseUrl , employee)
}

UpdateEmployee(employee: UpdateEmployee) : Observable<boolean>{
  debugger
  return this.httpClient.put<boolean>(this.baseUrl , employee)
}

DeleteEmployee(Id:number) : Observable<boolean>{
  debugger
  return this.httpClient.post<boolean>(this.baseUrl + `/delete` , Id)
}

}
export interface Employee {
  name: string;
  email: string;
  address: string;
  departmentId: number;
  department: Department;
}

export interface AddEmployee {
  name: string;
  email: string;
  address: string;
  departmentId: number;
}


export interface GetEmployee {
  employeeId?:number
  name: string;
  email: string;
  address: string;
  departementName: number;
}


export interface UpdateEmployee {
  Id: number
  name: string;
  email: string;
  address: string;
  departmentId: number;
}
