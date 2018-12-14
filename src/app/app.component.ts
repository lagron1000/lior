import { Component } from '@angular/core';
import { move } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [
    move,
  ]
})
export class AppComponent {
  title = 'lior';
  // currState = 'options';

  // changeState($event){
  //   this.currState = $event
  //   console.log(this.currState)
  // }
};
