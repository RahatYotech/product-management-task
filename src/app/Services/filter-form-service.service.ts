import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterFormServiceService {

  private category: string = "nooo-category";

  constructor() { }

  sendFilterFormData(category: string){
    this.category = category;
  }

  getFilterFormData(){
    return this.category;
  }
}
