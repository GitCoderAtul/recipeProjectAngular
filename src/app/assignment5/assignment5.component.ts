import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.scss'],
  providers:[UserService, CounterService]
})
export class Assignment5Component implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
 
}
