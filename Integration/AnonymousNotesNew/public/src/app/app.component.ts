
import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _noteService: NoteService) { }

  notes = [];

  getNotes() {
    this._noteService.getNotes().then(notes => this.notes = notes).catch(err => console.log(err));
  };

  createNote(event) {
    console.log(this)
    this._noteService.sendNote(event).then(response => console.log(response)).catch(err => console.log(err));
    this.getNotes()
  }

  ngOnInit() {
    this.getNotes();
  }

}