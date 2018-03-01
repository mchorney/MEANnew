
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class ExamService {

    constructor(private _http: Http) { }

    retrieveUsers() {
        return this._http.get('/api/give').map(data => data.json()).toPromise();
    }

    sendUser(user) {
        return this._http.post('/api/create', user).map(data => data.json()).toPromise();
    }

    login(user) {
        return this._http.post('/api/login', user).map(data => data.json()).toPromise();
    }

    grabUser() {
        return this._http.get('/api/account').map(data => data.json()).toPromise();
    }

    sendAppointment(apt) {
        return this._http.post('/api/add', apt).map(data => data.json()).toPromise();
    }

    retrieveAppointments() {
        return this._http.get('/api/appointments').map(data => data.json()).toPromise();
    }

    destroyAppointment(apt) {
        console.log("inside service")
        console.log(apt);
        var context = {
            id: apt
        }
        return this._http.post('/api/destroy', context).map(data => data.json()).toPromise();
    }

    logout() {
        return this._http.get('/api/logout').map(data => data.json()).toPromise();
    }

}