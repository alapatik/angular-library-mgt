import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    StatesComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
