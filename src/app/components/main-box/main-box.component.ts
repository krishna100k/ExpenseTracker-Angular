import { Component } from '@angular/core';

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

  addExpense(){
    const newExpense = {
      id: Math.floor(Math.random() * 10000000) as unknown as string,
      expense: this.expense,
      INR: this.INR
    }
    if(this.expense!== "" && this.INR!== ""){
      this.expenses.push(newExpense);
      alert("Expense Added Successfully!")
    }else{
      alert("Expense Not Found!")
    }

    console.log(this.expenses);
  }

  deleteExpense(id : string){

    this.expenses = this.expenses.filter((item) => {
      return item.id !== id;
    })

}
}
