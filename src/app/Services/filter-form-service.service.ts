import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterFormServiceService {

  categoryEmitter$ = new BehaviorSubject<string>("");
  
  raiseCategoryEmitterEvent(data: string) {
    this.categoryEmitter$.next(data);
  }

  getData() {
    return this.categoryEmitter$.asObservable();
  }
}