import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UsersService {

    constructor(private _http: Http) { }

    createPlayer(player, position) {
        return this._http.post('/api/create', { 'player': player, 'position': position }).map(data => data.json()).toPromise();
    }

    readPlayers() {
        return this._http.get('/api/read').map(data => data.json()).toPromise();
    }

    updatePlayer(user) {
        return this._http.post(`/api/update/${user.id}`, user).map(data => data.json()).toPromise();
    }

    getPlayers() {
        return this._http.get('/api/player').map(data => data.json()).toPromise();
    }
}