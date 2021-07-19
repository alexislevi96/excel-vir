import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  noFile = false;
  jsonData: any;
  constructor() { }

  DataFromEventEmitter(data: any) {
    console.log(data);
    this.jsonData = data;
    console.log(this.jsonData);
    this.noFile = true;
  }

}