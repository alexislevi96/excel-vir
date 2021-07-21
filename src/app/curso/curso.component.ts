import { Component } from '@angular/core';
import { CursoService } from '../servicios/curso.service';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [NgbAccordionConfig]
})
export class CursoComponent {

  ////////////////////////////////////////////////////////
  open1 = true;
  open2 = false;
  open3 = false;
  open4 = false;
  open5 = false;
  
  constructor(public _curso: CursoService,config: NgbAccordionConfig) {
    // this.cargarDatos();
    config.closeOthers = true;
    // config.type = 'info';
  }
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
  cambiarEstado1() {
    this.open1 = true;
    this.open2 = false;
    this.open3 = false;
    this.open4 = false;
    this.open5 = false;
  }
  cambiarEstado2() {
    this.open1 = false;
    this.open2 = true;
    this.open3 = false;
    this.open4 = false;
    this.open5 = false;
  }
  cambiarEstado3() {
    this.open1 = false;
    this.open2 = false;
    this.open3 = true;
    this.open4 = false;
    this.open5 = false;
  }
  cambiarEstado4() {
    this.open1 = false;
    this.open2 = false;
    this.open3 = false;
    this.open4 = true;
    this.open5 = false;
  }
  cambiarEstado5(){
    this.open1 = false;
    this.open2 = false;
    this.open3 = false;
    this.open4 = false;
    this.open5 = true;
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
    // this.openApro = !this.openApro;
  download(content:any, fileName:string, contentType:string) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
}
