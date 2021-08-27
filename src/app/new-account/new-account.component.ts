import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
 
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
 
  constructor(private loggingService:LoggingService,
    private accountService:AccountService) { 
      this.accountService.statusUpdated.subscribe(
        (status:string) => alert('New Status: ' + status)
      )
    }

    onCreateAccount(accountName: string, accountStatus: string) {
this.accountService.addAccount(accountName ,accountStatus);
      //this.loggingService.logStatusChange(accountStatus);
    }

  // onCreateAccount(accountName: string, accountStatus: string) {
  //   this.accountAdded.emit({
  //     name: accountName,
  //     status: accountStatus
  //   });

  
// this.loggingService.logStatusChange(accountStatus);
    //this is not good way to declare service
    /*const service = new LoggingService();
    service.logStatusChange(accountStatus)*/

    // console.log('A server status changed, new status: ' + accountStatus);
   
}
