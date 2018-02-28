import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }
  logout() {
    this._dataService.logout();
    this.router.navigate(['/']);
  }

}