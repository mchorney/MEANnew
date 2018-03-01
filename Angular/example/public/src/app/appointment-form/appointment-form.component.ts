import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';
import { User } from '../user';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  user
  holdUser = this.user;
  appointment = new Appointment()
  apt = { patient: 0, date: '', time: '', complaint: '' }
  datetime = new Date();
  constructor(private _examService: ExamService, private _router: Router) { }

  ngOnInit() {
    this.currentUser();
  }

  currentUser() {
    this._examService.grabUser()
      .then(user => this.user = user)
      .catch(err => console.log(err));
  }

  createAppointment() {
    console.log(this.user);
    var dd = new Date(this.apt.date).getDate();
    this.datetime.setDate(dd + 1)
    var mm = new Date(this.apt.date).getMonth();
    this.datetime.setMonth(mm)
    var yy = new Date(this.apt.date).getFullYear();
    this.datetime.setFullYear(yy)
    var hh = this.apt.time.slice(0, 2)
    var ms = this.apt.time.slice(3, 5)
    this.datetime.setHours(parseInt(hh))
    this.datetime.setMinutes(parseInt(ms))

    this.appointment.datetime = this.datetime;
    this.appointment.complaint = this.apt.complaint;
    this.appointment.patient = this.user;
    console.log("inside apt component:")
    console.log(this.appointment);
    this._examService.sendAppointment(this.appointment).then(response => {
      this._router.navigateByUrl('/dashboard');
    }).catch(err => console.log(err));
    this.appointment = new Appointment()
    this.apt = { patient: 0, date: '', time: '', complaint: '' }
  }

  gotoDash() {
    this._router.navigateByUrl('/dashboard');
  }

}
