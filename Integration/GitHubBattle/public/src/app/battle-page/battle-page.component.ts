import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GithubService } from "../github.service";
import { UsersService } from "../users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.css']
})
export class BattlePageComponent implements OnInit {
  player1 = new User();
  player2 = new User();

  constructor(private _githubService: GithubService, private _usersService: UsersService, private _router: Router) { }

  createPlayer(user, position) {
    if (position == 1) {
      this.player1.user_name = user.login;
      this.player1.avatar_url = user.avatar_url;
      this.player1.score = (user.public_repos + user.followers) * 12;
      this.player1.ready = true;
      this._usersService.createPlayer(this.player1, 1).then(response => console.log(response)).catch(err => console.log(err));
    } else {
      this.player2.user_name = user.login;
      this.player2.avatar_url = user.avatar_url;
      this.player2.score = (user.public_repos + user.followers) * 12;
      this.player2.ready = true;
      this._usersService.createPlayer(this.player2, 2).then(response => console.log(response)).catch(err => console.log(err));
    }
  }
  findGitUser(eventdata) {
    this._githubService.retrieveGitUser(eventdata.user.user_name).then(user => this.createPlayer(user, eventdata.position)).catch(err => console.log(err));
  }

  battle() {
    this._router.navigateByUrl('/results')
  }

  ngOnInit() {
  }

}