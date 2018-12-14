import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( private stateService : StatesService) { }

  ngOnInit() {
  }
  change(state){
    this.stateService.changeState(state);
  };

}
