import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notes-display',
  templateUrl: './notes-display.component.html',
  styleUrls: ['./notes-display.component.css']
})
export class NotesDisplayComponent implements OnInit {
  @Input() notes;

  constructor() { }

  ngOnInit() {

  }

}