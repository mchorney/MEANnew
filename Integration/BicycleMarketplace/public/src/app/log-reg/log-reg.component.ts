import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {
  log = {
    emailL: '',
    passwordL: ''
  };
  reg = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  check = {
    cp: ''
  };
  randomBike;
  errors;
  time = new Date();

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private router: Router) {
    this._dataService.bikeOfDay()
      .then((data) => { this.randomBike = data; })
      .catch((err) => { console.log(err); });
  }

  ngOnInit() {
  }
  register() {
    this._dataService.register(this.reg);
    this.reg = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.check = {
      cp: ''
    };
    this.router.navigate(['/home']);
  }
  login() {
    this._dataService.login(this.log)
      .then(data => {
        if (!data.loggedUserEmail) {
          this.errors = data.err;
        } else {
          this.log = {
            emailL: '',
            passwordL: ''
          };
          this.router.navigate(['/home']);
        }
      });
  }
}