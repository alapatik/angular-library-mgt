import { State } from './../models/state.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
@Input() states: State[];
@Output() selected: EventEmitter<State> = new EventEmitter<State>();

  constructor() { }

  ngOnInit() {
  }

onStateSelected(selectedState){
  this.selected.emit(selectedState.target.value);
  }
}


