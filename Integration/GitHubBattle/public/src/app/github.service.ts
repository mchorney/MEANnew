import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {

    constructor(private _http: Http) { }
    retrieveGitUser(name) {
        return this._http.get(`https://api.github.com/users/${name}`).map(data => data.json()).toPromise();
    }
}