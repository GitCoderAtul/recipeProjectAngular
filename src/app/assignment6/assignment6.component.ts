import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.scss']
})
export class Assignment6Component implements OnInit {
@ViewChild('formData') loginForm !: NgForm;
defaultSubscription = 'basic';
  userData = {
    email :'',
    defaultSubscription:'',
    password:''
  }
  submitted=false;

  constructor() { }

  ngOnInit(): void {
  }

  
  onSubmit(){ 
    this.submitted = true;
   this.userData.email = this.loginForm.value.email;
    this.userData.defaultSubscription = this.loginForm.value.subscription;
    this.userData.password = this.loginForm.value.password;

    console.log(this.loginForm);
    console.log("ok");
  }
}
