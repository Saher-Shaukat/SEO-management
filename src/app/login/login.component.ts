import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { HathService } from '../hath.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm: FormGroup;
  errorMessage: string;
  flag = true;
  loginObj = {
    "type": "phone_no",
    "input_value": ''

  }
otp;
  constructor(private route: Router, private api: HathService) { }

  ngOnInit() {

  }
  createUser() {
    switch (this.loginObj.type) {
      case "phone_no":
        if (this.loginObj.input_value.length > 0) {
          if (!(/^[7-9][0-9]{9}$/.test(this.loginObj.input_value))) {
            this.errorMessage = "mobile number must be of 10 digits and must start with 7/8/9"
            this.flag = true
            console.log("hello")
          }
          else {
            this.errorMessage = '';
            this.flag = false
            console.log("cfvhbvn")
          }

        }
        break;
      case "accountNumber":
        if (this.loginObj.input_value.length > 0) {
          if (!(/^[0-9]{10}$/.test(this.loginObj.input_value))) {

            this.errorMessage = "Account  Number must be of 10 digits"
            this.flag = true;
          }
          else {
            this.errorMessage = '';
            this.flag = false;
          }
        }
        break;
      case "emailAddress":
        if (this.loginObj.input_value.length > 0) {
          if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.loginObj.input_value))) {
            this.errorMessage = "check the email again..it must contain . and @"
          }
          else {
            this.errorMessage = '';
          }
        }
        break;
      case "userName":
        if (this.loginObj.input_value.length > 0) {
          if (!(/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(this.loginObj.input_value))) {
            this.errorMessage = "Should be only characters"
          }
          else {
            this.errorMessage = '';
          }
        }
        break;

      // default:
      // this.errorMessage="please choose the appropriate option"
    }


  }
  sendOtp() {
    console.log(this.loginObj)
    this.api.sendOtp(this.loginObj).subscribe((data) => {
   
      console.log(JSON.parse(data._body));
    })
  }

  verifyOtp() {
    console.log(this.otp,"hello",this.loginObj)
    this.api.verifyOtp(this.loginObj,this.otp).subscribe((data) => {
    console.log(JSON.parse(data._body));
    })
  }
  loginUser() {
    //  this.api.createUser(this.login,this"type).subscribe(data => {
    //         console.log(data)
    //         this.route.navigate(['login'])
    //    })
    console.log(this.loginObj.input_value, "hellooooo", this.loginObj.type)
  }
}

// }
//     }

