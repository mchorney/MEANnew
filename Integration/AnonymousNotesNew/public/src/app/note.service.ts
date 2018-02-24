import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Note } from './note';

@Injectable()
export class NoteService {

    constructor(private _http: Http) { }

    sendNote(note) {
        return this._http.post('/create', note).map(data => data.json()).toPromise();
    }

    getNotes() {
        return this._http.get('/read').map(data => data.json()).toPromise();
    }

}