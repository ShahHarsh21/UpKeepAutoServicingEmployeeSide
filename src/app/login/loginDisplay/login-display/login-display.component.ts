import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginDataService } from '../../login-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css']
})

export class LoginDisplayComponent implements OnInit {
  WorkerloginForm : FormGroup;
  constructor(public _workerloginData: LoginDataService, public _router: Router) { }

  ngOnInit() {
    this.WorkerloginForm = new FormGroup({
      email_id: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required])
    });

  }
  onLoginClick()
  {
    console.log(this.WorkerloginForm.value);
    if (this.WorkerloginForm.get('email_id').value!=null && this.WorkerloginForm.get('password').value!=null)
    {

      this._workerloginData.login(this.WorkerloginForm.value).subscribe(
        (loginData:any)=>{
          console.log(loginData);
          if(loginData.length==1)
          {
            console.log('valid');
            localStorage.setItem('worker_id', loginData[0].worker_id);
            console.log(localStorage.getItem('worker_id'));
            this._router.navigate(['/nav']);
          }
          else
          {
            console.log('invalid');
          }
        }
        );
      }
      else
      {
        alert('uname or password must not be empty');
      }
  }
}
