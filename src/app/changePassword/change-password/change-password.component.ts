import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyprofileDataService } from 'src/app/myprofile/myprofile-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  params_worker_id:any;
  oldPassword:string;
  passChange :FormGroup;
  constructor(public _passData:MyprofileDataService) { }

  ngOnInit(): void {
    // localStorage.getItem('worker_id');
    this.params_worker_id =localStorage.getItem('worker_id');
    console.log(this.params_worker_id);
    this._passData.getPasswordById(this.params_worker_id).subscribe(
      (data:any)=>{
        this.oldPassword = data;
        console.log(this.oldPassword);
      }
    );

    this.passChange =new FormGroup({
      oldPass : new FormControl(null),
      Pass :new FormGroup({
        newPass :new FormControl(null),
        confimPass : new FormControl(null)
      }),
    });
  }
  confirmPass()
  {
    if((this.passChange.value.Pass) === this.oldPassword[0])
    {
      console.log("SAme Che");
    }
    else
    {
      console.log("SAme nathi");
    }
  }
  onClickBack()
  {

  }
  onChangePassword()
  {
    this.confirmPass();
  }
}
