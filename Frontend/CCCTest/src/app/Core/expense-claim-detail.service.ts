import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseEntity } from './baseEntity';

@Injectable({
  providedIn: 'root'
})
export class ExpenseClaimDetailService {

  baseUrl = environment.baseUrl + "/ExpenseClaimDetail"

  constructor(private httpClient : HttpClient) { }

  GetById(Id:number):Observable<ExpenseClaimDetail>{
    return this.httpClient.get<ExpenseClaimDetail>(this.baseUrl + `/${Id}`)
  }
  
  GetAll(): Observable<ExpenseClaimDetail[]>{
    return this.httpClient.get<ExpenseClaimDetail[]>(this.baseUrl + `/All`)
  }
  
  AddExpenseClaimDetail(expenseClaimDetail: ExpenseClaimDetail) : Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl , expenseClaimDetail)
  }
  
  UpdateExpenseClaimDetail(expenseClaimDetail: ExpenseClaimDetail) : Observable<boolean>{
    return this.httpClient.put<boolean>(this.baseUrl , expenseClaimDetail)
  }
  
  DeleteExpenseClaimDetail(expenseClaimDetail: ExpenseClaimDetail) : Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl + `/delete` , expenseClaimDetail)
  }
}

export interface ExpenseClaimDetail extends BaseEntity {
    date: string;
    description: string;
    total: number;
}