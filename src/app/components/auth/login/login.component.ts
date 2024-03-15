import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {

  }

  // handle when user click on login
  handleSubmit(data:object):void {
    if(this.loginForm.valid){

    }else{ // loginForm is not valid
      alert('Invalid value');
    }
  }

}
