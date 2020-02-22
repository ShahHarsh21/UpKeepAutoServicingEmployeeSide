import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MyprofileDataService } from 'src/app/myprofile/myprofile-data.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  editProfile:FormGroup;
  params_worker_id : number =0;
  constructor(public _router:Router,public _profileDate:MyprofileDataService,public _act_routs:ActivatedRoute) {
    this.params_worker_id=this._act_routs.snapshot.params['worker_id'];
    console.log(this.params_worker_id);
     this.editProfile=new FormGroup({
      worker_id: new FormControl(null),
      email_id: new FormControl(null),
      password: new FormControl(null),
      worker_name:new FormControl(null),
      mobile_no: new FormControl(null),
      address: new FormControl(null),
      worker_image:new FormControl(null),
      joining_date:new FormControl(null)
    });
  }

  ngOnInit(): void {
    this._profileDate.getWorkerById(this.params_worker_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.formDataBind(data[0]);
      }
    );
  }
  formDataBind(Data)
  {
    this.editProfile.patchValue({
      worker_id:Data.worker_id,
      email_id:Data.email_id,
      password:Data.password,
      worker_name:Data.worker_name,
      mobile_no:Data.mobile_no,
      address:Data.address,
      worker_image:Data.worker_image,
      joining_date:Data.joining_date
    });

  }
  onProfileEdit()
  {
    console.log(this.editProfile.value);

      this._profileDate.updateWorker(this.params_worker_id,this.editProfile.value).subscribe(
        (data:any)=>{
          console.log();
          this._router.navigate(['/nav/Myprofile']);
        }
      );
  }

  onBack()
  {
    this._router.navigate(['/nav/Myprofile']);
  }
}
