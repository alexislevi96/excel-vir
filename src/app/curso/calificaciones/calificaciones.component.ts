import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css', '../curso.component.css']
})
export class CalificacionesComponent implements OnInit {

  constructor(public _curso: CursoService) { }

  ngOnInit(): void {
  }

}
