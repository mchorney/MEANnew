import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private _FoodService: FoodService, private _route: ActivatedRoute, private _Router: Router) {
    this._route.parent.paramMap.subscribe((params) => {
      this._FoodService.findFood({ id: params.get('id') })
        .then(response => {
          this.updateForm = response
        })
    })
  }

  ngOnInit() {
  }

  updateForm = {}

  onSubmit() {
    this._FoodService.updateFood(this.updateForm)
      .then(response => { this._Router.navigateByUrl('/foods') })
  }
}