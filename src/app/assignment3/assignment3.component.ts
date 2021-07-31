import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component{

  password:boolean = false;
  log:any = [];
  date = new Date();

  displayDetail(){
    this.password = true;
  }
  toggleDetail(){
    this.password = !this.password;
   // this.log.push(this.log.length + 1);
    
     this.log.push(this.date);
  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
