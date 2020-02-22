import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleAssignedDataService {
  url:string=environment.url + 'AssignedWorker/';
  workerUrl:string=environment.url+'workerDetails/';
  updateServiceUrl:String=environment.url+'statusRemark/';
  updateUrl:string=environment.url+'worker_update/';
  serviceUrl:string=environment.url+'service/';
  statusRemarkUrl :string=environment.url+'statusRemark/';
  constructor(public _http:HttpClient) { }

  getWorkerAssignedData(worker_id)
  {
    // const body=JSON.stringify(vehicle_assigned_id);
    return this._http.get(this.url + worker_id);
  }
  // getWorkerAssignedData(worker_id)
  // {
  //   // const body=JSON.stringify(email_id);
  //   // console.log("http://localhost:3000/workerDetails/viral124@gmail.com");
  //   return this._http.get(this.workerUrl+worker_id);
  // }
  updateService(item)
  {
    const body=JSON.stringify(item);
    return this._http.put(this.updateUrl,body);
  }
  getserviceById(service_id)
  {
    console.log(service_id);
    return this._http.get(this.serviceUrl+service_id);
  }
  updateStatusRemark(item)
  {
    console.log(item);
    const body=JSON.stringify(item);
    console.log(body);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.statusRemarkUrl,body,{headers:head});
  }
}
