import { Component, OnInit } from '@angular/core';
import { Player } from "../../player";
import { PlayerService } from '../../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  player = new Player()
  players

  constructor(private _playerService: PlayerService, private _router: Router) { }

  addPlayer() {
    this._playerService.addPlayer(this.player).then(response => console.log(response)).catch(err => console.log(err));
    this.player = new Player()
    this._router.navigateByUrl('/players/list')
  }

  ngOnInit() {

  }

}