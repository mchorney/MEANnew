import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { ManageComponent } from './manage/manage.component';
import { ListComponent } from './manage/list/list.component';
import { AddComponent } from './manage/add/add.component';
import { GamesComponent } from './status/games/games.component';


const routes: Routes = [
    {
        path: 'players', component: ManageComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: '/players/list' },
            { path: 'list', component: ListComponent },
            { path: 'add', component: AddComponent }
        ]
    },
    {
        path: 'status', component: StatusComponent, children: [
            { path: 'games', component: GamesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }