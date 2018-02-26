import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-display',
  templateUrl: './player-display.component.html',
  styleUrls: ['./player-display.component.css']
})
export class PlayerDisplayComponent implements OnInit {
  @Input() position
  @Input() player
  constructor() { }

  ngOnInit() {
  }

}