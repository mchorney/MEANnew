
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerDisplayComponent } from './player-display/player-display.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';

import { UsersService } from "./users.service";
import { GithubService } from './github.service';

@NgModule({
  declarations: [
    AppComponent,
    BattlePageComponent,
    PlayerFormComponent,
    PlayerDisplayComponent,
    ResultsComponent,
    RankingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    UsersService,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }