import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../servicios/curso.service';
import * as $ from "jquery";

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css', '../curso.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(public _curso: CursoService) { }

  ngOnInit(): void {
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
}
