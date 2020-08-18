import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveDataService } from '../leave-data.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent implements OnInit {
  worker_id : string = '';
  leave_typeArr : string [] =['Vacation','Medical Leave','Qutting','Other'];
  leaveApplicationForm : FormGroup;
  selectedLeaveType : string = '';
  constructor(private _routs : Router,public _leaveDataService : LeaveDataService) { }

  ngOnInit(): void {

    localStorage.getItem('worker_id');
    this.worker_id =localStorage.getItem('worker_id');
    console.log(this.worker_id);


    this.leaveApplicationForm = new FormGroup({
      fk_worker_id : new FormControl(this.worker_id),
      // email_id : new FormControl(null),
      // mobile_no : new FormControl(null),
      leaveStartDate : new FormControl(null),
      leaveEndDate : new FormControl(null),
      Leave_type : new FormControl(null),
      comment : new FormControl(null),
    });
  }

  onRadioBtnChangeWorker(value)
  {
    // console.log(value);
    this.selectedLeaveType = value;
    console.log(this.selectedLeaveType);
  }

  onApplyLeave()
  {
    this.leaveApplicationForm.setValue({
      fk_worker_id : this.leaveApplicationForm.value.fk_worker_id,
      leaveStartDate : this.leaveApplicationForm.value.leaveStartDate,
      leaveEndDate : this.leaveApplicationForm.value.leaveEndDate,
      Leave_type : this.selectedLeaveType ,
      comment :  this.leaveApplicationForm.value.comment
    });
    console.log( this.leaveApplicationForm.value);

    this._leaveDataService.applyLeave(this.leaveApplicationForm.value).subscribe(
      (data : any)=>{
        console.log(data);
        alert("Your Leave Application send to the senior");
        this._routs.navigate(['/nav/']);
      }
    );
  }

  onBack()
  {
    this._routs.navigate(['/nav/']);
  }

  onClickPastLeaves()
  {
    console.log(this.leaveApplicationForm.value.fk_worker_id);
    this._routs.navigate(['/nav/pastLeave/'+this.leaveApplicationForm.value.fk_worker_id]);
  }
}
