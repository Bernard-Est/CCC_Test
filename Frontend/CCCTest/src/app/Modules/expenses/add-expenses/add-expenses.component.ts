import { Component, OnInit } from '@angular/core';
import { ExpenseClaimDetail, ExpenseClaimDetailService } from 'src/app/Core/expense-claim-detail.service';
import { ExpenseClaim, ExpenseClaimService } from 'src/app/Core/expense-claim.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {

  constructor(private expensesService : ExpenseClaimService, private expensesDetails : ExpenseClaimDetailService) { }

  date! : Date
  description : string = ''
  total : number = 0
  status : boolean = false
  expenseClaimDetails : ExpenseClaimDetail[] = []

  ngOnInit(): void {
  }

  AddExpenses(){
    var exp: ExpenseClaim = { date: this.date, description:this.description, total:this.total, status:this.status, expenseClaimDetails : this.expenseClaimDetails}
    this.expensesService.AddExpenseClaim(exp).subscribe(d => {
      //toa
    })
  }
}
