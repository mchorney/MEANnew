import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Player } from "./player";


@Injectable()
export class PlayerService {

    constructor(private _http: Http) { }

    addPlayer(player) {
        return this._http.post('/api/create', player).map(data => data.json()).toPromise()
    }

    getPlayer() {
        return this._http.get('/api/show').map(data => data.json()).toPromise()
    }

    deletePlayer(id) {
        return this._http.post('/api/delete', { id: id }).map(data => data.json()).toPromise()
    }

    updatePlayer(id, newStatus, gameNum) {
        let context = {
            'id': id,
            'newStatus': newStatus,
            'gameNum': gameNum
        }
        return this._http.post('/api/update', context).map(data => data.json()).toPromise()
    }
}