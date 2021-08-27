import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.scss']
})
export class Assignment4Component implements OnInit {
  oddNumbers: number[]=[];
  evenNumbers: number[]=[];

  onIntervalFired(firedNumber:number){
    if(firedNumber % 2 == 0){
      this.evenNumbers.push(firedNumber);
    }  else{
      this.oddNumbers.push(firedNumber);
    }
    //console.log(firedNumber);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
