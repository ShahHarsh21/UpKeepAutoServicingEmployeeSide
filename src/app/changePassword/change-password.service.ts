import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
  url : string = environment.url + 'worker';
  constructor(public _http : HttpClient) { }

  changePassword(item,worker_id)
  {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set('content-type','application/json');
    return this._http.post(this.url + worker_id,body,{headers : head});
  }
}
