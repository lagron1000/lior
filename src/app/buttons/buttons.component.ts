import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StatesService } from '../states.service';
import { move, btnColor } from '../animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  animations: [
    move,
    btnColor
  ]
})
export class ButtonsComponent implements OnInit {

  currState;
  router;

  constructor(private stateService: StatesService, private Router: Router) {
    this.router = Router;
    stateService.stateObs.subscribe((state) => {
      this.currState = state
    })
  }

  ngOnInit() {
  }
  change(state) {
    this.stateService.changeState(state);
  };

}
