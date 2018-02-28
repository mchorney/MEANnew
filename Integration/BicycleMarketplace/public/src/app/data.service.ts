
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
    user = [];

    constructor(private http: Http) { }

    register(userData) {
        console.log('GOT TO ADD USER IN SERVICE');
        console.log(userData);
        this.user.push(userData);
        return this.http.post('/register', userData)
            .map(response => response.json()).toPromise();
    }
    login(userData) {
        console.log('GOT TO LOGIN IN SERVICE');
        console.log(userData);
        this.user.push(userData);
        return this.http.post('/login', userData)
            .map(response => response.json()).toPromise();
    }
    loggedUser() {
        console.log('IN SERVICE LOGGED USER');
        return this.http.post('/loggedUser', this.user)
            .map(response => response.json()).toPromise();
    }
    logout() {
        console.log('IN SERVICE LOGOUT');
        this.user = [];
        return this.http.get('/logout')
            .map(response => response.json()).toPromise();
    }
    addBike(bikeData) {
        console.log('IN SERVICE ADD BIKE');
        return this.http.post('/newBike', bikeData)
            .map(response => response.json()).toPromise();
    }
    allBikes() {
        console.log('IN SERVICE ALL BIKES');
        return this.http.get('/allBikes')
            .map(response => response.json()).toPromise();
    }
    logBikes() {
        console.log('IN SERVICE LOG BIKES');
        return this.http.get('/logBikes')
            .map(response => response.json()).toPromise();
    }
    edit(data) {
        return this.http.post('/edit', data)
            .map(response => response.json()).toPromise();
    }
    delete(id) {
        return this.http.post('/delete', id)
            .map(response => response.json()).toPromise();
    }
    bikeOfDay() {
        console.log('IN SERVICE BIKE OF DAY');
        return this.http.get('/bikeOfDay')
            .map(response => response.json()).toPromise();
    }
}