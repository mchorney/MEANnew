import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { BrowseComponent } from './home/browse/browse.component';
import { ListingsComponent } from './home/listings/listings.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LogRegComponent,
        children: []
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: BrowseComponent },
            { path: 'listings', component: ListingsComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }