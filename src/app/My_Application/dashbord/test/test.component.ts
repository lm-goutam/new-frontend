import { Component } from '@angular/core';
import { __values } from 'tslib';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  selectedDay: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    
  }

  loginForm = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    //password:new FormControl(''),
    creditno:new FormControl('',[Validators.required,Validators.pattern('[1-9]*'),Validators.maxLength(16)]),
    nameoncard:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    cvv:new FormControl('',[Validators.required,Validators.maxLength(3)]),
    zipcode:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.pattern('[1-9]*')]),
    
  })

  get email(){return this.loginForm.get('email')};
  get name(){return this.loginForm.get('name')};
  get creditno(){return this.loginForm.get('creditno')};
  get nameoncard(){return this.loginForm.get('nameoncard')};
  get cvv(){return this.loginForm.get('cvv')};
  get zipcode(){return this.loginForm.get('zipcode')};

  getName1()
  {
    alert('Payment is Confirm')
  }


onLogin()
{
  console.warn(this.loginForm.value)
}


}

