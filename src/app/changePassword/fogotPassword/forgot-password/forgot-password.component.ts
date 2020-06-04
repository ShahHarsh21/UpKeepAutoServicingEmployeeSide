import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordServiceService } from '../../forgotPassword/forgot-password-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword : FormGroup;
  password : string = '';
  mail_id : string='';
  params_worker_id : number =0;
  constructor(private _router : Router,public _mail:ForgotPasswordServiceService) {
    this.forgotPassword = new FormGroup({
      email : new FormControl(null,[Validators.required,Validators.email
      ])
    });
  }

  ngOnInit(): void {
    localStorage.getItem('worker_id');
    this.params_worker_id =+ localStorage.getItem('worker_id');
    console.log(this.params_worker_id);
    this._mail.getPasswordById(this.params_worker_id).subscribe(
      (PassData : any)=>{
        console.log(PassData);
        this.password = PassData;
      }
    );
  }

  onClickBack()
  {
    this._router.navigate(['nav/'])
  }
  onFogotClick()
  {
    console.log(this.forgotPassword.value);

    if(this.forgotPassword.get('email').value != null)
    {
      let a = this.forgotPassword.get('email').value;
console.log(a);
      this._mail.getUserByEmailId(a).subscribe(
        (data:any)=>{
          console.log(data);
          this.mail_id = data[0].email_id;
          this.password = data[0].password;
          console.log(this.mail_id+"\n"+this.password);
          if(this.mail_id != a)
          {
            alert("Please Enter Valid Email Id");
          }
          else
          {
            this._mail.passwordMail(a,"Reset Password", "Hi "+data[0].email_id + " , \n\n\nYour Password is "+this.password+"\nDon't Share your credentials to anyone . \n We recommand you to change your password ."+
              "\n\n\n\n\n\n\n\n\n\nThank You \n Team UpKeepAutoServicing").subscribe(
                (Data)=>{
                          alert("Mail has been send to your Email-Id"+"\n Please check Out");
                        });
          }
        });
        this._router.navigate(['nav/']);
    }
  }
}
