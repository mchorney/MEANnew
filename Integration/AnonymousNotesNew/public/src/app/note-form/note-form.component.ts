import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  note = new Note()

  constructor(private _noteService: NoteService) { }

  @Output() newNoteEmitter = new EventEmitter();

  createNote() {
    this.newNoteEmitter.emit(this.note);
    this.note = new Note();
  }

  ngOnInit() {
  }

}