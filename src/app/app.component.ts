import { Component } from '@angular/core';
import { DataService } from './servicios/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excel-vir';
  constructor(public _data: DataService) { }
  // noFile = false;
  // title = 'excel-vir';
  // DataFromEventEmitter(data: any) {
  //   console.log(data);
  //   this.noFile = true;
  // }
}
