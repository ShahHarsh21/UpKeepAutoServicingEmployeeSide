import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveDataService {
  url : string = environment.url + 'leave/';
  constructor(public _http : HttpClient) { }

  applyLeave(item)
  {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url ,body,{headers:head});
  }
  getAllLeaveByWorker(fk_worker_id)
  {
    return this._http.get(this.url+fk_worker_id);
  }
}
