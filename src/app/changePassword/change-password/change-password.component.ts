import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyprofileDataService } from 'src/app/myprofile/myprofile-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePasswordService } from '../change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  params_worker_id:any;
  oldPassword:string;
  passChangeForm :FormGroup;
  flag : boolean = false;
  constructor(public _passData:MyprofileDataService,public _password: ChangePasswordService,public _routs:Router) {}

  ngOnInit(): void {
    localStorage.getItem('worker_id');
    this.params_worker_id =localStorage.getItem('worker_id');
    console.log(this.params_worker_id);
    this._passData.getPasswordById(this.params_worker_id).subscribe(
      (data:any)=>{
        this.oldPassword = data;
        console.log(this.oldPassword);
      }
    );

    this.passChangeForm =new FormGroup({
        email_id : new FormControl(Validators.required,Validators.email),
        Pass :new FormGroup({
          oldPass : new FormControl(null,Validators.required),
          confimOldPass : new FormControl(null,Validators.required),
      }),
      newPass :new FormControl(null,Validators.required,Validators.maxLength[8]),
    });
  }
  confirmPass()
  {
    if((this.passChangeForm.value.Pass) === this.oldPassword[0])
    {
      this.flag = true;
      console.log("Same Che");
      let item = {
        "email_id" : this.passChangeForm.value('email_id'),
        "password" : this.passChangeForm.value('newPass')
      };
      this._password.changePassword(item,this.params_worker_id).subscribe(
        (Data : any)=>{
          console.log(Data);
          alert("Your PAssword Has been Changed");
          this._routs.navigate(['nav']);
        }
      );
    }
    else
    {
      this.flag = false;
      console.log("Same nathi");
    }
  }
  onClickBack()
  {
    this._routs.navigate(['/nav/']);
  }
  onChangePassword()
  {
    this.confirmPass();
  }
  onForgotPasswordClick()
  {
    this._routs.navigate(['/nav/forgotPassword/']);
  }
}
