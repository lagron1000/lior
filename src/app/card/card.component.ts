import { Component, OnInit, Input } from '@angular/core';
import { loaded } from '../animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations : [
    loaded
  ]
})
export class CardComponent implements OnInit {

  @Input() site;
  loaded = 'loaded'

  constructor() { }

  ngOnInit() {
  }
  iLoaded(){
    this.loaded = "loaded";
  }

}
