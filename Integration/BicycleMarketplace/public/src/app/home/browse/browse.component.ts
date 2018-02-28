import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  allBikes = [];
  user;

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private router: Router) {
    this.getBikes();
  }

  ngOnInit() {
    this.user = this._dataService.loggedUser()
      .then(data => this.user = data.loggedUserId);
  }
  getBikes() {
    console.log('IN GET BIKES FUNCTION');
    this._dataService.allBikes()
      .then(data => this.allBikes = data.bikeResults);
  }
  delete(id) {
    console.log('IN COMPONENT DELETE FUNCTION');
    const bike = {
      _id: id
    };
    this._dataService.delete(bike);
    this.router.navigate(['/', '/listings']);
  }
}