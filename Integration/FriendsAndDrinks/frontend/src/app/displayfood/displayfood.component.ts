import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displayfood',
  templateUrl: './displayfood.component.html',
  styleUrls: ['./displayfood.component.css']
})
export class DisplayfoodComponent implements OnInit {

  constructor(private _FoodService: FoodService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe((params) => {
      this._FoodService.findFood({ id: params.get('id') })
        .then(response => {
          this.food = response
        })
    })
  }

  ngOnInit() {
  }

  food = {}
}