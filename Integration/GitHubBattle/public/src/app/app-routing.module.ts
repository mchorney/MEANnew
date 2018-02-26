import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerDisplayComponent } from './player-display/player-display.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
    // All routes here
    { path: '', pathMatch: 'full', component: BattlePageComponent },
    { path: 'results', pathMatch: 'full', component: ResultsComponent },
    { path: 'rankings', pathMatch: 'full', component: RankingsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }