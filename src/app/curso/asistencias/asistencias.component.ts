import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../servicios/curso.service';
@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css', '../curso.component.css']
})
export class AsistenciasComponent implements OnInit {

  constructor(public _curso: CursoService) { }
  
  ngOnInit(): void {
  }

}
