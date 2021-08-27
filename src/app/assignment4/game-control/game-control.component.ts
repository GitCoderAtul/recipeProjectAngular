import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
@Output() intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber:number=0;

  onStart(){
    this.interval = setInterval(
      () => {
        this.intervalFired.emit(this.lastNumber + 1);
        this.lastNumber++;
      },1000)
  }
  onStop(){
    clearInterval(this.interval);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
