import { Component, OnInit, Input } from '@angular/core';
import { move, loaded } from '../animations';
import { StatesService } from '../states.service';
import { sites } from  '../sitesData';
import { art } from '../artData';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
  animations: [
    move
  ]
})
export class SitesComponent implements OnInit {

  content;
  sites = sites;
  art = art

  constructor( private stateService : StatesService) { 

    stateService.stateObs.subscribe((content)=>{
      if(this[content]){
        setTimeout(()=>{this.content = this[content]}, 300)
        
      }
    })
  }

  ngOnInit() {
  }
  change(state){
    this.stateService.changeState(state);
  };

}
