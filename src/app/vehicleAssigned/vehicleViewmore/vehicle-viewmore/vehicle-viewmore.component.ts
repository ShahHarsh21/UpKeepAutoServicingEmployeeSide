import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { vehicleAssignedModel } from '../../vehicleAssignedModel';

@Component({
  selector: 'app-vehicle-viewmore',
  templateUrl: './vehicle-viewmore.component.html',
  styleUrls: ['./vehicle-viewmore.component.css']
})
export class VehicleViewmoreComponent implements OnInit {
    public service_id :number;
    public fk_user_id:number;
    public vehicle_no:string;
    public meter_reading :number;
    public fuel_tank:string;
    public remark :string;
    public complaints:string;
    public user_name:string;
    public woker_id:number;
    public status:string;
    public vehicle_Assigned_id:number;
  constructor(public dialogref: MatDialogRef<VehicleViewmoreComponent>, @Inject(MAT_DIALOG_DATA) public data:vehicleAssignedModel) { }

  ngOnInit(): void {
    this.service_id = this.data.service_id,
    this.fk_user_id = this.data.fk_user_id,
    this.vehicle_no = this.data.vehicle_no,
    this.meter_reading = this.data.meter_reading,
    this.fuel_tank = this.data.fuel_tank,
    this.remark = this.data.remark,
    this.complaints = this.data.complaints,
    this.user_name=this.data.user_name,
    this.woker_id=this.data.woker_id,
    this.status=this.data.status,
    this.vehicle_Assigned_id=this.data.vehicle_Assigned_id
  }

}
