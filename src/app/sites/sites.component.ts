import { Component, OnInit } from '@angular/core';
import { move, loaded } from '../animations';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
  animations: [
    move,
    loaded
  ]
})
export class SitesComponent implements OnInit {

  loaded
  constructor( private stateService : StatesService) { }

  ngOnInit() {
  }
  change(state){
    this.stateService.changeState(state);
  };
  iLoaded(){
    this.loaded = "loaded";
  }
}
