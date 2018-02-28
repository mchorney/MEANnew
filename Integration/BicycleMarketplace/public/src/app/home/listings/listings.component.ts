import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  newBike = {
    title: '',
    info: '',
    location: '',
    price: '',
    image: ''
  };
  editBike = {
    titleE: '',
    infoE: '',
    locationE: '',
    priceE: '',
    imageE: '',
    idE: ''
  };
  err;
  loggedBikes = [];
  constructor(private _dataService: DataService, private _route: ActivatedRoute, private router: Router) {
    this.getBikes();
  }

  ngOnInit() {
  }
  addBike() {
    this._dataService.addBike(this.newBike);
    this.newBike = {
      title: '',
      info: '',
      location: '',
      price: '',
      image: ''
    };
    this.router.navigate(['/home']);
  }
  getBikes() {
    console.log('IN GET BIKES FUNCTION');
    this._dataService.logBikes()
      .then(data => this.loggedBikes = data.bikeResults);
  }
  edit(id) {
    this.editBike.idE = id;
    console.log(this.editBike);
    this._dataService.edit(this.editBike);
    this.editBike = {
      titleE: '',
      infoE: '',
      locationE: '',
      priceE: '',
      imageE: '',
      idE: ''
    };
    this.router.navigate(['/home']);
  }
  delete(id) {
    console.log('IN COMPONENT DELETE FUNCTION');
    const bike = {
      _id: id
    };
    this._dataService.delete(bike);
    this.router.navigate(['/home']);
  }
}