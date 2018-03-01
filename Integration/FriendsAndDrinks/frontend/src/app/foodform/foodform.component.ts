import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-foodform',
  templateUrl: './foodform.component.html',
  styleUrls: ['./foodform.component.css']
})
export class FoodformComponent implements OnInit {
  constructor(private _FoodService: FoodService) { }
  ngOnInit() {
  }

  food = {
    name: '',
    price: '',
    quantity: ''
  }

  onSubmit() {
    this._FoodService.addFood(this.food)
      .then(response => {
        this.food = {
          name: '',
          price: '',
          quantity: ''
        }
      })
  }
}