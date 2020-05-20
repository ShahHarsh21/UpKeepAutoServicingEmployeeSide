import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { leave_class } from 'src/app/class/leave_class';
import { LeaveDataService } from '../../leave-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-past-leave',
  templateUrl: './past-leave.component.html',
  styleUrls: ['./past-leave.component.css']
})
export class PastLeaveComponent implements OnInit {
  displayedColumns:string[]=['leaveStartDate','leaveEndDate','status','Action'];
  dataSource: MatTableDataSource<leave_class>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  fk_worker_id :  number = 0;
  constructor(private _leaveData : LeaveDataService,private _act_routs : ActivatedRoute) {
    this.dataSource  = new MatTableDataSource;
  }

  ngOnInit(): void {
    this.fk_worker_id = this._act_routs.snapshot.params['worker_id'];
    this._leaveData.getAllLeaveByWorker(this.fk_worker_id).subscribe(
      (Data : any[])=>{
        this.dataSource.data = Data;
      }
    );
  }

  applyFilter(value)
  {

  }

  onViewMore(row)
  {

  }

  onClickProductRequirment(row)
  {

  }
}
