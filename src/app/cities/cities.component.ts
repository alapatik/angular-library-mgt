import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country.model';
import { City } from '../models/city.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
@Input() cities: City[];
  constructor() { }

  ngOnInit() {
  }
}
