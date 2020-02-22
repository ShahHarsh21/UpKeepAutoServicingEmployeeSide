import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MyprofileDataService } from 'src/app/myprofile/myprofile-data.service';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {
  editImage :FormGroup;
  img:string='';
  worker_id:number=0;
  constructor(public _workerData: MyprofileDataService,public _router:Router,public _act_routs:ActivatedRoute) { }

  ngOnInit(): void {
    this.worker_id=this._act_routs.snapshot.params['worker_id'];
    this._workerData.getWorkerImage(this.worker_id).subscribe(
      (Data:any)=>{
        console.log(Data);
        this.img=environment.url+"/Images/WorkerImages/" +Data[0].worker_image;
        console.log(this.img);
      }
    );
    this.editImage=new FormGroup({
      worker_image:new FormControl(null)
    });
  }
  onImageChange(value)
  {
    this.img=value;
    console.log(this.img);
  }
  onImageSubmit()
  {
    console.log(this.editImage.value);
  }
}
