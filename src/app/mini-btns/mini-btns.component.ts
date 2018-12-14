import { Component, OnInit, Input } from '@angular/core';
import { StatesService } from '../states.service';
import { btnColor, move } from '../animations';

@Component({
  selector: 'app-mini-btns',
  templateUrl: './mini-btns.component.html',
  styleUrls: ['./mini-btns.component.scss'],
  animations: [
    btnColor, 
    move
  ]
})
export class MiniBtnsComponent implements OnInit {

  @Input() states;
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
