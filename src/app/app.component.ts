import { Component, OnInit } from '@angular/core';
import { DataService } from './servicios/data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'excel-vir';
  constructor(public _data: DataService) {}
  ngOnInit(){
    AOS.init();
  }
  // noFile = false;
  // title = 'excel-vir';
  // DataFromEventEmitter(data: any) {
  //   console.log(data);
  //   this.noFile = true;
  // }
}
