import { Component } from '@angular/core';
import { CursoService } from '../servicios/curso.service';
import * as $ from "jquery";
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {

  

  ////////////////////////////////////////////////////////
  open1 = true;
  open2 = false;
  open3 = false;
  open4 = false;
  open5 = false;
  
  constructor(public _curso: CursoService) {
    // this.cargarDatos();
     //Botón de acción del acordeón
     $('.dropdownButton').click(function() {
      //Elimina la clase on de todos los botones
      $('.dropdownButton').removeClass('on');
      $('.dropdownButton').addClass('borderButtom');
      // Elimino flecha down
      $('.dropdownButton').find('i').removeClass('fa-chevron-up');
      $('.dropdownButton').find('i').addClass('fa-chevron-down');
      //Plegamos todo el contenido que esta abierto
      $('.dropdownContent').slideUp(350);

      //Si el siguiente slide no esta abierto lo abrimos
      if($('.dropdownButton').next().is(':hidden') === true) {

        //Añade la clase on en el botón
        $('.dropdownButton').addClass('on');
        $('.dropdownButton').removeClass('borderButtom');
        // Añado clase down
        $('.dropdownButton').find('i').removeClass('fa-chevron-down');
        $('.dropdownButton').find('i').addClass('fa-chevron-up');
        

        //Abre el slide
        $('.dropdownButton').next().slideDown(350);
      }
    })
    // Cerramos todo el contenido al cargar la página
    $('.dropdownContent').hide();
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
