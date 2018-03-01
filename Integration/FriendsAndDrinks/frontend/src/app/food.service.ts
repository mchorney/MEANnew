import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'Rxjs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FoodService {

    constructor(private _Http: Http) { }

    foodList: BehaviorSubject<any[]> = new BehaviorSubject([]);

    updateList(newList) {
        this.foodList.next(newList)
    }

    getAllFoods() {
        return this._Http.get('/AllFood')
            .map(response => this.updateList(response.json()))
            .toPromise()
    }
    addFood(Food) {
        return this._Http.post('/CreateFood', Food)
            .map(response => { this.getAllFoods() }).toPromise()
    }
    findFood(foodId) {
        return this._Http.post('/ReadFood', foodId)
            .map(response => response.json()).toPromise()
    }
    updateFood(updatedFood) {
        return this._Http.post('/UpdateFood', updatedFood)
            .map(response => this.updateList(response.json()))
            .toPromise()
    }
    deleteFood(deleteFood) {
        return this._Http.post('/DestroyFood', deleteFood)
            .map(response => this.updateList(response.json()))
            .toPromise()
    }
}