import { Component, OnInit } from '@angular/core';

import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private _FoodService: FoodService) { }

  foods = []

  ngOnInit() {
    this._FoodService.foodList.subscribe(
      (foodList) => { this.foods = foodList }
    )
    this._FoodService.getAllFoods()
  }

}