import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-main-account',
  templateUrl: './main-account.component.html',
  styleUrls: ['./main-account.component.scss']
})
export class MainAccountComponent implements OnInit {
accounts: {name:string, status:string}[] = [];

  constructor(private accountServices:AccountService) { }

  ngOnInit(): void {
    this.accounts= this.accountServices.accounts;
  }
 
}
