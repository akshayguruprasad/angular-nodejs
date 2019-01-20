import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { validateConfig } from '@angular/router/src/config';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    $(document).ready(function () {      
    });
  }


  login() {
    let login = {
      email: $("#inputEmail").val(),
      password: $("#inputPassword").val()
    };
    alert(login);

    if (!this.validateLogin(login)) {
      return false;
    }

    alert("validation success");
    this.loginUser(login);

  }

  validateLogin(login) {
    return true;
  }


  loginUser(login) {
    alert("login");
    $.ajax({
      method: "POST",
      url: "https://ec2-3-82-163-178.compute-1.amazonaws.com:9000/login",
      data: login
    })
      .done(function (msg) {


        if (msg) {


        } else {
          alert("invalid credentials");
          console.log("invalid credentials");
        }
      });
  }

  register() {

    let register = {
      fname: $("#user-fname").val(),
      lname: $("#user-lname").val(),
      email: $("#user-email").val(),
      mobile: $("#user-number").val(),
    };
if(!this.validateRegister(register)){
  alert("invalid data");
return false;

}
this.registerUser(register);



  }

registerUser(register){
alert("registering");
  $.ajax({
    method: "POST",
    url: "https://ec2-3-82-163-178.compute-1.amazonaws.com:9000/register",
    data: register
  })
.done(function (msg) {
      if (msg) {
      } else {
        alert("invalid credentials");
        console.log("invalid credentials");
      }
    });
}
  validateRegister(register){
    return true;
  }
  toggleResetPswd(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
  }
  toggleSignUp(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
  }
}