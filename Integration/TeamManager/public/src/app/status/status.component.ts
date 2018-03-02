import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  games
  game_num

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this.getGame()
  }

  getGame() {
    this._playerService.getPlayer().then(gameList => this.games = gameList).catch(err => console.log(err));
  }

  setGame(updatedGames) {
    this.games = updatedGames
  }

  getGame1() {
    this.game_num = 1
  }
  getGame2() {
    this.game_num = 2
  }
  getGame3() {
    this.game_num = 3
  }

}