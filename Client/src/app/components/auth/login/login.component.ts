import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private fb: FormBuilder, private mainService: MainService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {

  }

  // handle when user click on login
  handleSubmit(data: object): void {
    if (this.loginForm.valid) {
      this.mainService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log(response)
          if(response && response.statusCode === 200){
            // logic after successful login

          }else{
            // show toast message of error message
          }
        },
        error: (error) => {
          console.log(error)
            // show toast message of error message
        }
      })

    } else { // loginForm is not valid
      alert('Invalid value');
    }
  }

}
