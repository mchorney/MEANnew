import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  @Input() games
  @Input() gameNumber
  @Output() getUpdate = new EventEmitter()


  constructor(private _playerService: PlayerService) { }

  ngOnInit() {

  }

  changeStatus(id, newStatus) {
    this._playerService.updatePlayer(id, newStatus, this.gameNumber).then(players => this.getUpdate.emit(players)).catch(err => console.log(err));
  }
}