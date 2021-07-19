import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void { }
  estados: any = {
    openAsis: true,
    openApro: false
  };
  estadoSettings = false;
  // box = document.querySelector('.box');
  settings() {
    let aux = document.querySelector('.box')
    if (aux?.classList.contains('closeSettings')) {
      aux?.classList.add('openSettings');
      aux?.classList.remove('closeSettings');
    } else
      if (() => aux?.classList.contains('openSettings')) {
        aux?.classList.add('closeSettings');
        aux?.classList.remove('openSettings');
      }
  }
  cambiarEstadoAsis() {
    for (let item of this.estados) {
      item = false;
    }
    this.estados.openApro = true;
  }
  openSettings(item: any): void {
    let aux2 = document.querySelectorAll('.boton');
    aux2.forEach((item) => (item.classList.remove('botones')))
    let aux = document.querySelector(item);
    if (aux?.classList.contains('botones')) {
      aux?.classList.remove('botones');
    } else if (() => !aux?.classList.contains('botones')) {
      aux?.classList.add('botones');
    }
  }

  openAsistencia() {
    let aux = document.querySelector('.openAsistencia')
    if (aux?.classList.contains('botones')) {
      aux?.classList.remove('botones');
    } else if (() => !aux?.classList.contains('botones')) {
      aux?.classList.add('botones');
    }
    // this.openAsis = !this.openAsis;
  }
  openAprobacion() {
    let aux = document.querySelector('.openApro')
    if (aux?.classList.contains('botones')) {
      aux?.classList.remove('botones');
    } else if (() => !aux?.classList.contains('botones')) {
      aux?.classList.add('botones');
    }
    // this.openApro = !this.openApro;
  }
}
