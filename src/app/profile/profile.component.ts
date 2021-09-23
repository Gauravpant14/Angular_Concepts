import { Component } from "@angular/core";

//this is called decorator and decorator always starts with @ sign. 
@Component({
  selector:'my-profile', //this is the name of our component , it can be .app-root and [app-root]
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent{
    myDate!: string;
    name:string = 'john cena';
    age:number = 20;
    status:string = 'coder';
    salary:number = 100; 
    btnColor:string;
    isDisabled:boolean = true;
    firstName:string = 'Gaurav';
    lastName:string = 'pant';
    address:string | undefined;

    fruits: string[] = ['banana','apple','mango','grapes']
    // when page loads constructor call automatically 
    constructor(){
        const colors =  ['red','green','pink','yellow','blue'];
        this.btnColor = "btn "+colors[Math.floor(Math.random() * colors.length)];
        setTimeout(() => this.isDisabled = false, 3000);
    }
    getTotalNum(){
        return this.age*this.salary
    }

    convertToInr(){
        alert(this.salary);
    }

    getInput(e:any){
       this.firstName = e.target.value;
    }
}