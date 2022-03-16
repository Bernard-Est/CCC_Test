import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseEntity } from './baseEntity';
import { ExpenseClaimDetail } from './expense-claim-detail.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseClaimService {

  baseUrl = environment.baseUrl + "/ExpenseClaim"

  constructor(private httpClient : HttpClient) { }

  GetById(Id:number):Observable<ExpenseClaim>{
    return this.httpClient.get<ExpenseClaim>(this.baseUrl + `/${Id}`)
  }

  GetAll(): Observable<ExpenseClaim[]>{
    return this.httpClient.get<ExpenseClaim[]>(this.baseUrl + `/All`)
  }

  AddExpenseClaim(expenseClaim: ExpenseClaim) : Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl , expenseClaim)
  }

  UpdateExpenseClaim(expenseClaim: ExpenseClaim) : Observable<boolean>{
    return this.httpClient.put<boolean>(this.baseUrl , expenseClaim)
  }

  DeleteExpenseClaim(Id:number) : Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl + `/delete` , Id)
  }
}

export class ExpenseClaim {
    date!: Date;
    description!: string;
    total!: number;
    status!: boolean;
    expenseClaimDetails: ExpenseClaimDetail[] =[]
}

