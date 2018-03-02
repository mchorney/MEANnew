import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlayerService } from './player.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { ManageComponent } from './manage/manage.component';
import { ListComponent } from './manage/list/list.component';
import { AddComponent } from './manage/add/add.component';
import { GamesComponent } from './status/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    ManageComponent,
    ListComponent,
    AddComponent,
    GamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }