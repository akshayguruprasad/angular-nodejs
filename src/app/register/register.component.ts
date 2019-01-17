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


$(document).ready(function(){




});
  }


login(){
let login={
email:$("#inputEmail").val(),
password:$("#inputPassword").val()
};

if(!this.validateLogin(login)){
return false;
}


this.loginUser(login);

}

validateLogin(login){
return false;
}


loginUser(login){

  $.ajax({
    method: "POST",
    url: "https://ec2-3-82-163-178.compute-1.amazonaws.com:9000/login",
    data: login
  })
    .done(function(msg){
console.log(msg);
console.log("printing the message");
alert(JSON.stringify(msg));
    });
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
