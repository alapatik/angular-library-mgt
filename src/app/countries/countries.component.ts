import { Country } from './../models/country.model';
import { Component, OnInit, Input, Output, EventEmitter, state } from '@angular/core';  

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  @Input() countries: Country[];
  @Output() selectedCountry: EventEmitter<Country> = new EventEmitter<Country>();
  constructor() { }

  ngOnInit() {
  }

  onCountryChanged(selected){
    this.selectedCountry.emit(selected.target.value);
  }
}
