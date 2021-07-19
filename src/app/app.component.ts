import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noFile = false;
  title = 'excel-vir';
  DataFromEventEmitter(data: any) {
    console.log(data);
    this.noFile = !this.noFile;
  }
}
