import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  @Input() position;
  @Input() player;
  notfound = false;

  user = new User();

  @Output() playerEmitter = new EventEmitter();

  constructor() { }

  sendPlayer() {
    this.playerEmitter.emit({ 'user': this.user, 'position': this.position });
    this.user = new User();
    this.notfound = true;
  };

  ngOnInit() {
  }

}