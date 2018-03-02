import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers()
  }

  getPlayers() {
    this._playerService.getPlayer().then(playerList => this.players = playerList).catch(err => console.log(err));
  }

  deletePlayer(playerID) {
    this._playerService.deletePlayer(playerID).then(response => console.log(response)).catch(err => console.log(err));
    this.getPlayers()
  }

}