import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = {};
  appointments;
  // name = this.user.name;
  constructor(private _examService: ExamService, private _router: Router) { }

  ngOnInit() {
    this.currentUser();
    console.log("is this undefined?")
    console.log(this.user)
    this.grabApts();
  }

  deleteApt(apt) {
    console.log("see if delete id is grabbing")
    console.log(apt);
    this._examService.destroyAppointment(apt).then(response => console.log("reaching delete function")).catch(err => console.log(err));
    this.grabApts();
  }

  currentUser() {
    this._examService.grabUser().then(user => this.user = user).catch(err => console.log(err));
  }

  logoutUser() {
    this._examService.logout().then(response => {
      this._router.navigateByUrl('/');
    }).catch(err => console.log(err));
  }

  grabApts() {
    this._examService.retrieveAppointments()
      .then(apts => this.appointments = apts)
      .catch(err => console.log(err));
  }

  gotoForm() {
    this._router.navigateByUrl('/form');
  }

}