import { Component } from '@angular/core';

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrl: './main-box.component.css'
})
export class MainBoxComponent {
  expenses : any = [];
  expense = "";
  INR = "";

  addExpense(){
    console.log("clicked!")
    const newExpense = {
      expense: this.expense,
      INR: this.INR
    }
    if(this.expense!== "" && this.INR!== ""){
      this.expenses.push(newExpense)
      alert("Expense Added Successfully!")
    }else{
      alert("Expense Not Found!")
    }
  }

}
