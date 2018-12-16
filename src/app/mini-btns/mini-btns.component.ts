import { Component, OnInit, Input } from '@angular/core';
import { StatesService } from '../states.service';
import { btnColor, move } from '../animations';
import { Router } from '@angular/router';

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
  router;

  constructor(private stateService: StatesService, private Router : Router) {
    this.router = Router;
    stateService.stateObs.subscribe((state) => {
      this.currState = state
    })
  }
  ngOnInit() {
  }
  change(state) {
    this.stateService.changeState(state);
    // setTimeout(()=>{this.router.navigateByUrl('/'+state)}, 500)
  };

}
