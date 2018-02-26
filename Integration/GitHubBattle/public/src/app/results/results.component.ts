import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  player1 = {}
  player2 = {}

  constructor(private _usersService: UsersService, private _router: Router) { }

  reset() {
    this._router.navigateByUrl('/')
  }

  setPlayers(players) {
    this.player1 = players.player1;
    this.player2 = players.player2;
  }

  ngOnInit() {
    this._usersService.getPlayers().then(response => this.setPlayers(response)).catch(err => console.log(err));
  }
}