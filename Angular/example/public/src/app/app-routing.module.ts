import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

const routes: Routes = [
    {
        path: '',
        children: [],
        pathMatch: 'full',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        children: [],
        component: DashboardComponent
    },
    {
        path: 'form',
        children: [],
        component: AppointmentFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);