import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/users.service';


@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss']
})
export class ActiveUserComponent implements OnInit {
  users!: string[];
   

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.users= this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

}
