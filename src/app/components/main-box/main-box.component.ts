import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Expenses{
  id: string,
  expense : string,
  INR : string
}

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrl: './main-box.component.css'
})
export class MainBoxComponent {
  expenses : Expenses[] = [];
  expense : string = "";
  INR : string = "";
  expenseForm!: FormGroup;

  constructor(){

  }

  ngOnInit(){
    this.expenseForm = new FormGroup({
      expense: new FormControl('', Validators.required),
      INR: new FormControl('', Validators.required)
    });

    const expensesArr = localStorage.getItem("expenses") as string;
    this.expenses = JSON.parse(expensesArr)
  }



  addExpense(){

    let expense = this.expenseForm.get("expense")?.value;
    let INR = this.expenseForm.get("INR")?.value

    const newExpense = {
      id: Math.floor(Math.random() * 10000000) as unknown as string,
      expense,
      INR
    }
    if(expense!== "" && INR!== ""){
      this.expenses.push(newExpense);
      alert("Expense Added Successfully!")
    }else{
      alert("Expense Not Found!")
    }

    localStorage.setItem("expenses", JSON.stringify(this.expenses))

    console.log(this.expenses);
  }

  deleteExpense(id : string){

    this.expenses = this.expenses.filter((item) => {
      return item.id !== id;
    })

    localStorage.setItem("expenses", JSON.stringify(this.expenses))

}
}
