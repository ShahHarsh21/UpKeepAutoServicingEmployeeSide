import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordServiceService {

  public url : string = environment.url + 'workerLogin/';
  public emailUrl : string = environment.url + 'email/';
  public password_url : string = environment.url  +'worker_password/';
  constructor(public _http:HttpClient) { }

  getUserByEmailId(email_id)
  {
    return this._http.get(this.url + email_id);
  }

  getPasswordById(worker_id)
  {
    return this._http.get(this.password_url+worker_id);
  }

  passwordMail(email_id,message,password)
  {
    console.log(email_id,message,password);
    let body={
      "email_id" : email_id ,
      "message"  : password,
      "subject"  : message
    }

    let header = new HttpHeaders().set('content-type','application/json');

    return this._http.post(this.emailUrl,body,{headers : header});
  }
}
