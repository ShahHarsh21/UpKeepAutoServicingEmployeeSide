import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VehicleAssignedDataService } from '../../vehicle-assigned-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-vehicle-assigned-edit',
  templateUrl: './vehicle-assigned-edit.component.html',
  styleUrls: ['./vehicle-assigned-edit.component.css']
})
export class VehicleAssignedEditComponent implements OnInit {
  EditWorker: FormGroup;
  params_worker_id:number=0;
  fk_service_id:number=0;
  constructor(public _Data:VehicleAssignedDataService,public _router : Router,public _Act_routs:ActivatedRoute) {}

  ngOnInit(): void {
    this.EditWorker = new FormGroup({
      status : new FormControl(null),
      remark :  new FormControl (null),
      service_id : new FormControl(null),
      vehicle_assigned_id :new FormControl(null)
    });
    this.params_worker_id=this._Act_routs.snapshot.params['worker_id'];
    console.log(this.params_worker_id);
    this._Data.getWorkerAssignedData(this.params_worker_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.fk_service_id=data[0].service_id;
        console.log(this.fk_service_id);
        this.formDataBind(data[0]);
      }
    );

  }
  formDataBind(data)
  {
    this.EditWorker.patchValue({
      status : data.status,
      remark : data.remark,
      service_id :data.service_id,
      vehicle_assigned_id :data.vehicle_assigned_id
    });
    console.log(this.EditWorker.value);
  }
  onUpdateSubmit()
  {
    console.log(this.EditWorker.value);
    this._Data.updateStatusRemark(this.EditWorker.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/nav/vehicleAssigned']);
      }
    );
  }
  onChange()
  {
    console.log(this.EditWorker.value.status);
  }
  onClickBack()
  {
    this._router.navigate(['/nav/vehicleAssigned']);
  }
}
