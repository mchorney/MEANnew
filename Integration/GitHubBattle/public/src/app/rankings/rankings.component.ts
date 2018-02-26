import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  players = [];
  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.readPlayers().then(players => this.players = players).catch(err => console.log(err));
  }

}
