import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CurrState } from './currState';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  statesArr : Array<CurrState>;

  currState = 'options';
  public stateSub : Subject<any>;
  public stateObs : Observable<any>;
  constructor() { 
    this.stateSub = new Subject();
    this.stateObs = this.stateSub.asObservable();
    this.stateSub.next(this.currState);
  }
  changeState(state){
    this.currState = state;
    this.stateSub.next(this.currState);
  }
}
