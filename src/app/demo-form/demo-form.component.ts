import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {
  //another way to recived form data using @viewChild
@ViewChild('f') signupForm!: NgForm;

defaultQuestion:string = 'pet';
answer:string = '';
genders:any=['male','female'];
user = {
  username:'',
  email:'',
  secret:'',
  questionAnswer:'',
  gender:''
}
submitted =false;

suggestUserName(){
  this.submitted = false; 
  const suggestedName = 'test';
  
  //setValue use to set your whole form data
  // this.signupForm.setValue({
  //   userData: {
  //     username:suggestedName,
  //     email:'',  
  //   }, 
  //   secret:'teacher',
  //   questionAnswer:'prit',
  //   gender:'male'
  // })

  //patchValue to overwrite parts of form data
this.signupForm.form.patchValue({
  userData:{
    username:suggestedName
  }
})

}

  

  constructor() { }

  ngOnInit(): void {
  }
  
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
  //    console.log(this.signupForm);
  this.submitted =true;
  this.user.username = this.signupForm.value.userData.username;
  this.user.email = this.signupForm.value.userData.email;
  this.user.secret = this.signupForm.value.secret;
  this.user.questionAnswer = this.signupForm.value.questionAnswer;
  this.user.gender = this.signupForm.value.gender;

  this.signupForm.reset();
  }

}
