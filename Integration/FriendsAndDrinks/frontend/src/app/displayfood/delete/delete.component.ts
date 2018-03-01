import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _FoodService: FoodService, private _route: ActivatedRoute, private _Router: Router) { }

  ngOnInit() {
  }

  onDelete() {
    this._route.parent.paramMap.subscribe((params) => {
      this._FoodService.deleteFood({ id: params.get('id') })
        .then(response => { this._Router.navigateByUrl('/foods') })
    })
  }
}