import { Component, OnInit } from '@angular/core';
import { move } from '../animations';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
  animations: [
    move,
    
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
