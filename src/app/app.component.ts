import { City } from './models/city.model';
import { Component } from '@angular/core';
import { State } from './models/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
countries = [
    {  name: 'USA',  countryId: 1}, 
    {  name: 'India',  countryId: 2}
  ];

  states: State[];
  cities: City[];

  onCountrySelected(countryId){
    this.states = [
      {name: "Delhi", countryId: 2, stateId: 1},
      {name: "Goa", countryId: 2, stateId: 2},
      {name: "AP", countryId: 2, stateId: 3},
      {name: "TG", countryId: 2, stateId: 4},
      {name: "MH", countryId: 2, stateId: 5},
      {name: "Illinois", countryId: 1, stateId: 6},
      {name: "California", countryId: 1, stateId: 7},
      {name: "Missori", countryId: 1, stateId:8}
    ].filter(item => item.countryId == countryId);
    }

    onStateSelected(selectedState){
      this.cities =[
        {name: "Delhi", stateId:1},
        {name: "Goa", stateId:2},
        {name: "Tirupati", stateId:3},
        {name: "Vizag", stateId:3},
        {name: "Hyderabad", stateId:4},
        {name: "Warangal", stateId:4},
        {name: "Mumbai", stateId:5},
        {name: "Pune", stateId:5},
        {name: "Naperville", stateId:6},
        {name: "Chicago", stateId:6},
        {name: "O'Fallen", stateId:8},
        {name: "St. Luious", stateId:8},
        {name: "Los Angeles", stateId:7},
        {name: "San Fransisco", stateId:7},
      ].filter(item => item.stateId == selectedState);
    }
}
