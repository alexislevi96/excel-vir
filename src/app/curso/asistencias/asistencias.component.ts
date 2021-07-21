import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../servicios/curso.service';
import { Chart, ChartArea, registerables  } from 'chart.js';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css', '../curso.component.css']
})
export class AsistenciasComponent implements OnInit {

  constructor(public _curso: CursoService) {
   }
  
  ngOnInit(): void {
    Chart.register(...registerables);
    let ctx: any = document.getElementsByClassName("myChart");
    let myChart = new Chart(ctx[0], {
      type: 'doughnut',
      data: {
        labels: ['col1', 'col2', 'col3'],
        datasets: [{
          label: 'num datos',
          data: [10,9,2],
          backgroundColor: ['#F9E79F','#A3E4D7','#F5B7B1']
        }]
      }
    });
    console.log(myChart)
  }
}
