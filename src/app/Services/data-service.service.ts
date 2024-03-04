import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  dataEmitter$ = new BehaviorSubject<string>("");

  raiseDataEmitterEvent(data: string) {
    this.dataEmitter$.next(data);
  }

  getData() {
    return this.dataEmitter$.asObservable();
  }
}
