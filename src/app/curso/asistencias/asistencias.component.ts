import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../servicios/curso.service';
@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css', '../curso.component.css']
})
export class AsistenciasComponent implements OnInit {

  constructor(public _curso: CursoService) {
    this.cargarDatos();
    Object.assign(this, this.single)
  }

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
  xAxisLabel = 'Dia';
  yAxisLabel = 'Asistencias por dia';

  colorScheme = {
    domain: ['#EDBB99', '#F9E79F', '#AED6F1', '#D2B4DE', '#F5B7B1', '#ABEBC6']
  };


  onSelect(event: any) {
    console.log(event);
  }

  cargarDatos(): any {
    const data = [];
    for (let i = 0; i < this._curso.arrayFechas.length; i++) {
      data.push({
        "name": this._curso.arrayFechas[i],
        "value": this._curso.arrayAsitencias[i]
      })
    }
    console.log(data);
    this.single = data;
  }
   //////////////////////////////
  ngOnInit(): void {
  }
}
