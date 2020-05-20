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
  selectedfile : File= null;
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
  onchange(f)
  {
    this.selectedfile = <File>f.target.files[0];
    console.log(this.selectedfile);
  }
 onImageSubmit()
  {
    const fd = new FormData();
    if (this.selectedfile != null)
    {
      console.log(this.selectedfile);
      fd.append("img", this.selectedfile, this.selectedfile.name);
    }
    else
    {
      // fd.append("img");
      alert("YOU HAVE IMAGE");
    }
    console.log(this.selectedfile);
    this._workerData.updateWorkerPhoto(this.worker_id,fd).subscribe(
      (ImgData:any[])=>{
        console.log(ImgData);
        this._router.navigate(['/nav/Myprofile/']);
      }
    );
  }
}
