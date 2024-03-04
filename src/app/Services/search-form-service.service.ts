import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchFormServiceService {

  queryTextEmitter$ = new BehaviorSubject<string>("");

  raiseQueryTextEmitterEvent(data: string) {
    this.queryTextEmitter$.next(data);
  }

  getData() {
    return this.queryTextEmitter$.asObservable();
  }
}
