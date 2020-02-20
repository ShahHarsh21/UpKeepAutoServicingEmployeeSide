import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css']
})
export class LoginDisplayComponent implements OnInit {
  WorkerloginForm : FormGroup;
  constructor() { }

  ngOnInit() {
  }
  onLogin()
  {

  }
}
