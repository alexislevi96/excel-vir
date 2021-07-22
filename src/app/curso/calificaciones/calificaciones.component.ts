import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/servicios/curso.service';
// import { single } from './data';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css', '../curso.component.css']
})
export class CalificacionesComponent {

  single: any;
  multi: any = '';

  // view: number[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Tema / Dia';
  yAxisLabel = 'Promedio calificacion por tema';

  colorScheme = {
    domain: ['#EDBB99', '#F9E79F', '#AED6F1', '#D2B4DE', '#F5B7B1', '#ABEBC6']
  };

  constructor(public _curso: CursoService) {
    // console.log(this.single);
    this.cargarDatos();
    Object.assign(this, this.single)
  }


  onSelect(event: any) {
    console.log(event);
  }

  cargarDatos(): any {
    const data = [];
    for (let i = 0; i < this._curso.arrayClases.length; i++) {
      data.push({
        "name": this._curso.arrayCalificaciones[i].clase + ' / ' + this._curso.arrayFechas[i],
        "value": this._curso.arrayCalificaciones[i].total / this._curso.totalAlumnos
      })
    }
    console.log(data);
    this.single = data;
  }
}
