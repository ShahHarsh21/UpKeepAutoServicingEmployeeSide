import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {
  public url:string=environment.url+"dashboardratio/";


  constructor(public _http:HttpClient) { }

  getorder()
  {
    return this._http.get(this.url);
  }
  getRatioByWorkerId(fk_worker_id)
  {
    return this._http.get(this.url+fk_worker_id);
  }
}
