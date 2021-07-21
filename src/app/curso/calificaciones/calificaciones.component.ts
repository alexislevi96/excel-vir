import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/servicios/curso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css', '../curso.component.css']
})
export class CalificacionesComponent {

  single: any = '';
  multi: any = '';

  // view: number[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public _curso: CursoService) {
    Object.assign(this, { single })
  }


  onSelect(event: any) {
    console.log(event);
  }
}
