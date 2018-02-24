import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NotesDisplayComponent } from './notes-display/notes-display.component';
import { NoteComponent } from './note/note.component';

import { NoteService } from './note.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    NotesDisplayComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }