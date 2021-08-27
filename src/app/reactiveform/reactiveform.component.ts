import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
genders= ['male','female'];
signupForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userName': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

}
