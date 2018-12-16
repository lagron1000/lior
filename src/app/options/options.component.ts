import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { move, btnColor, slideInAnimation } from '../animations';
import { StatesService } from '../states.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
  animations: [
    move, 
    btnColor,
    slideInAnimation
  ]
})
export class OptionsComponent implements OnInit {

  currState = 'options';
  currRoute
  changeState: EventEmitter<any> = new EventEmitter<any>();
  constructor( private stateService : StatesService) { 
    this.stateService.changeState(this.currState);
    this.stateService.stateObs.subscribe((state)=>{
      this.currState = state;
    });
  };

  ngOnInit() {
  };

  change(state){
    this.stateService.changeState(state);
  };
  prepareRoute(outlet: RouterOutlet) {
    this.currRoute = outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  changeOfRoutes(outlet){
    return this.change(outlet.activatedRouteData.animation)
  }

};
