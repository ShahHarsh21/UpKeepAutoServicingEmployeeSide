import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyprofileDataService {
  url:string=environment.url+'workerDetails/';
  workerUrl : string = environment.url+'worker_update/';
  passwordUrl : string = environment.url+'passwordChange/';
  constructor(public _http:HttpClient) { }

  getWorkerById(worker_id)
  {
    return this._http.get(this.url + worker_id);
  }
  getWorkerImage(worker_id)
  {
    return this._http.get(this.workerUrl + worker_id);
  }
  updateWorker(worker_id,item)
  {
    const body=JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.put(this.workerUrl+worker_id,body,{headers : head});
  }
  getPasswordById(worker_id)
  {
    return this._http.get(this.passwordUrl+worker_id);
  }
}
