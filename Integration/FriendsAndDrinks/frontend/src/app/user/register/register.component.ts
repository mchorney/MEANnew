import { Component, OnInit } from '@angular/core';

import { UserService } from '../../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private _UserService: UserService, private _Router: Router) { }
  ngOnInit() {
  }

  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_conf: ''
  }

  registeredUser = {}

  onSubmit() {
    this._UserService.registerUser(this.user)
      .then(response => this.registeredUser = response)
      .then(response => this._Router.navigateByUrl('/foods'))
      .catch(err => console.log(err))
    this.user = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_conf: ''
    }
  }


}