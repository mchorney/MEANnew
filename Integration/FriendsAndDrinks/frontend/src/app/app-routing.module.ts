import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { FoodComponent } from './food/food.component';
import { DisplayfoodComponent } from './displayfood/displayfood.component';
import { UpdateComponent } from './displayfood/update/update.component';
import { DeleteComponent } from './displayfood/delete/delete.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: UserComponent
    },
    {
        path: 'food/:id',
        component: DisplayfoodComponent,
        children: [
            { path: 'delete', pathMatch: 'full', component: DeleteComponent },
            { path: 'update', pathMatch: 'full', component: UpdateComponent }
        ]
    },
    {
        path: 'foods',
        pathMatch: 'full',
        component: FoodComponent
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }