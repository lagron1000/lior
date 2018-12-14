import { Component, OnInit } from '@angular/core';
import {  } from '../animations';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
  animations: [
    
    
  ]
})
export class SitesComponent implements OnInit {

  constructor( private stateService : StatesService) { }

  ngOnInit() {
  }
  change(state){
    this.stateService.changeState(state);
  };
}
