import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductServiceService {

  newProductEmitter$ = new BehaviorSubject<{}>({}); 

  raiseNewProductEmitterEvent(data: {}) {
    this.newProductEmitter$.next(data);
  }

  getData() {
    return this.newProductEmitter$.asObservable();
  }
}