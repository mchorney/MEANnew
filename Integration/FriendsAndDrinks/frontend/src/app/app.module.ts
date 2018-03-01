import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './User/register/register.component';
import { LoginComponent } from './User/login/login.component';
import { UserComponent } from './user/user.component';
import { FoodComponent } from './food/food.component';
import { FoodformComponent } from './foodform/foodform.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { FoodService } from './food.service';
import { DisplayfoodComponent } from './displayfood/displayfood.component';
import { UpdateComponent } from './displayfood/update/update.component';
import { DeleteComponent } from './displayfood/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    FoodComponent,
    FoodformComponent,
    DisplayfoodComponent,
    UpdateComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService, FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
