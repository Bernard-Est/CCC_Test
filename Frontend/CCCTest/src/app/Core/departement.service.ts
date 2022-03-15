import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseEntity } from './baseEntity';
import { Employee } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  baseUrl = environment.baseUrl+ "/Department"

  constructor(private httpClient : HttpClient) { }

  GetAll(): Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.baseUrl + `/All`)
  }

  GetById(Id:number):Observable<Department>{
    return this.httpClient.get<Department>(this.baseUrl + `/${Id}`)
  }

}

export interface Department {
  departmentId : number
  name: string;
  //employees: Employee[];
}

