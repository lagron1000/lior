import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CurrState } from './currState';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  statesArr : Array<CurrState>;

  currState = 'options';
  public stateSub : Subject<any>;
  public stateObs : Observable<any>;
  public router;
  constructor(private Router : Router) {
    this.router = Router
    this.stateSub = new Subject();
    this.stateObs = this.stateSub.asObservable();
    this.stateSub.next(this.currState);
  }
  changeState(state){
    this.currState = state;
    this.stateSub.next(this.currState);
    if (this.router.url !== '/' + this.currState){
      setTimeout(() => { this.router.navigateByUrl('/' + state) }, 500)
    }
  }
}
