import { Component, OnInit } from '@angular/core';
import { ExpenseClaimDetail, ExpenseClaimDetailService } from 'src/app/Core/expense-claim-detail.service';
import { ExpenseClaim, ExpenseClaimService } from 'src/app/Core/expense-claim.service';
import { ToastService } from 'src/app/Core/toast.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  constructor(private expensesService : ExpenseClaimService, private expensesDetails : ExpenseClaimDetailService, private toastr : ToastService) { }

  date! : Date
  description : string = ''
  total : number = 0
  status : boolean = false
  expenseClaimDetails : ExpenseClaimDetail[] = []

  expense: ExpenseClaim = new ExpenseClaim();

  ngOnInit(): void {
  }

  AddExpenses(){

    this.expensesService.AddExpenseClaim(this.expense).subscribe(d => {
      this.toastr.showSuccess("Expenses Added!")
    })
  }
  addExpenseClaimDetail(){
    debugger
    this.expense.expenseClaimDetails.push(new ExpenseClaimDetail())
  }
}


// This Section still need :
  // The Total of all details and bind it in the field
  // Get all extends as admin
  // Get extends by employee
  // Some DTO => details in backend
