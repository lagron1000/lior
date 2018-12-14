import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StatesService } from '../states.service';
import { move, btnColor } from '../animations';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  animations : [
    move,
    btnColor
  ]
})
export class ButtonsComponent implements OnInit {

  currState;

  constructor( private stateService : StatesService) {
    stateService.stateObs.subscribe((state)=> {
      this.currState = state
    })
   }

  ngOnInit() {
  }
  change(state){
    this.stateService.changeState(state);
  };

}
