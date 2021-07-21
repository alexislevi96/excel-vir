import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../servicios/curso.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css', '../curso.component.css']
})
export class AsistenciasComponent implements OnInit {

  constructor(public _curso: CursoService) {
    Object.assign(this, { single });
  }

   single: any[] = [];
   view: any = [700, 400];
 
   // options
   gradient: boolean = true;
   showLegend: boolean = true;
   showLabels: boolean = true;
   isDoughnut: boolean = false;
   legendPosition: any = 'below';
 
   colorScheme = {
     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
   };
 
   onSelect(data: any): void {
     console.log('Item clicked', JSON.parse(JSON.stringify(data)));
   }
 
   onActivate(data: any): void {
     console.log('Activate', JSON.parse(JSON.stringify(data)));
   }
 
   onDeactivate(data: any): void {
     console.log('Deactivate', JSON.parse(JSON.stringify(data)));
   }
   //////////////////////////////
  ngOnInit(): void {
  }
}
