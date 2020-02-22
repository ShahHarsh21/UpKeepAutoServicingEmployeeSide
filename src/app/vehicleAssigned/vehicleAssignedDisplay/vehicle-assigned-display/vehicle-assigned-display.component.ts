import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { vehicleAssignedModel } from '../../vehicleAssignedModel';
import { VehicleAssignedDataService } from '../../vehicle-assigned-data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { VehicleViewmoreComponent } from '../../vehicleViewmore/vehicle-viewmore/vehicle-viewmore.component';

@Component({
  selector: 'app-vehicle-assigned-display',
  templateUrl: './vehicle-assigned-display.component.html',
  styleUrls: ['./vehicle-assigned-display.component.css']
})
export class VehicleAssignedDisplayComponent implements OnInit {
  displayedColumns:string[]=['vehicle_no','complaints','status','Edit','Action'];
  dataSource: MatTableDataSource<vehicleAssignedModel>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  // fk_worker_id:number=0;
  constructor(public _vehicleData:VehicleAssignedDataService,public _router:Router,public _dialog:MatDialog) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit() {
    // this.vehicle_Assigned_id =localStorage.getItem('email_id')
    // this._vehicleData.getVehicleById().subscribe();
    this._vehicleData.getWorkerAssignedData(localStorage.getItem('worker_id')).subscribe(
      (workerData:any[])=>{
        console.log(workerData);
        this.dataSource.data = workerData;
      }
    );
  }
  applyFilter(value)
  {

  }
  onEditStatus(row)
  {
    this._router.navigate(['/nav/vehicleAssignedEdit/'+row.worker_id]);
  }
  onViewMore(row)
  {

    this._dialog.open(VehicleViewmoreComponent,{data:row});
  }
}
