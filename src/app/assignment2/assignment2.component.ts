import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component   {

  username:string = '';
   age:number | undefined;
  salary:number | undefined;
  technology:string='';  

   
  onResetInput(){
    this.username = ''; 
    this.age = undefined; 
    this.salary = undefined; 
    this.technology = ''; 
  }

   

}
