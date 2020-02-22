import { Component, OnInit } from '@angular/core';
import { MyprofileDataService } from '../../myprofile-data.service';
import { worker } from 'src/app/worker/worker';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile-display',
  templateUrl: './myprofile-display.component.html',
  styleUrls: ['./myprofile-display.component.css']
})
export class MyprofileDisplayComponent implements OnInit {
  public worker_id: number;
  public workerArr:worker[]=[];
  public worker_image :string;
  constructor(public _workerData: MyprofileDataService,public _router:Router) { }

  ngOnInit(): void {
    this.worker_id = parseInt(localStorage.getItem('worker_id'));
    console.log(this.worker_id);
    this._workerData.getWorkerById(this.worker_id).subscribe(
      (workerData: any) => {
        console.log(workerData[0]);
        this.workerArr.push(workerData[0]);
      }
    );
    this._workerData.getWorkerImage(this.worker_id).subscribe(
      (Data:any)=>{
        console.log(Data);
        this.worker_image=environment.url+"/Images/WorkerImages/" +Data[0].worker_image;
        console.log(this.worker_image);
      }
    );
  }
  onImageEdit()
  {
    this._router.navigate(['/nav/editImage/'+this.worker_id]);
  }
  onProfileEdit()
  {
    this._router.navigate(['/nav/editprofile/'+this.worker_id]);
  }
}
