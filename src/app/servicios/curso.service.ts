import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //Asistencia
  totalAsist = 0;
  totalAsistFull = 0;
  promAsist:number = 0;

  //Detalles del curso
  nameCourse = '';
  nameTecnology = '';
  dateCourse = '';
  nameProfessor = '';
  totalAlumnos = 0;

  //Clases
  totalClass = 0;

  //Calificaciones
  totalAprob = 0;
  promedioApro = 0;
  promFinalTeo = 0;
  promFinalPract = 0;
  totalAlumnosFinalTeo = 0;
  totalAlumnosFinalPract = 0;

  //Array de alumnos
  alumnos:any = [];
  
  //Metodo para sumar las asistencias
  plusAsist(array: any, length: any):number{
    let total: number = 0;
    for(let i = 1; i < length; i++){
      if(array[i] == undefined || array[i] >= 1){
        total += parseInt(array[i]) || 1;
      }
    }
    return total;
  }
  
  cargarDatos(){

    //Variables
    let alumno = 0;
    let alumnoLength = 0;
    //Funcion que recorre todo el objeto
    for(let i = 0; i < 78; i++){
      
    // Titulo del curso
      if(this._data.data[i][0] === 'STACK'){
        this.nameCourse = this._data.data[i][1];
      }
    // Titulo de la tecnologia
      if(this._data.data[i][0] === 'Tecnologia /s'){
        this.nameTecnology = this._data.data[i][1];
      }
    // Titulo de la tecnologia
      if(this._data.data[i][0] === 'Fecha de Inicio'){
        this.dateCourse = this._data.data[i][1];
      }
    // Titulo de la tecnologia
      if(this._data.data[i][0] === 'Formador:'){
        this.nameProfessor = this._data.data[i][1];
      }
    // Lista de alumnos y asistencia
      let j = 0;
      if(this._data.data[i][0] === 'ASISTENCIA'){
        alumnoLength = this._data.data[i+1].length;
        this.totalClass = alumnoLength - 1;
        for(alumno = i+2; this._data.data[alumno][0] != 'Total Asistencia' ; alumno++){
          this.alumnos.push({
            name: this._data.data[alumno][0],
            asistencia: this.plusAsist(this._data.data[alumno], alumnoLength),
            contrated: this._data.data[alumno][alumnoLength] || 'No',
            qualification: 0,
            finalPractico: 0,
            finalTeorico: 0
          });
          this.totalAsist += this.alumnos[j].asistencia;
          j++;
        }
        i += alumno - i;
      }
    //Total asistencias y promedio asistencia
      this.totalAlumnos = this.alumnos.length;
      
      // this.totalAsist = this.plusAsist(this._data.data[alumno], this.totalClass);
    //Sumo tot alumnos recorridos
      // i = alumno;
    //Agrego promedio a cada alumno
      if(this._data.data[i][0] == "Notas Practicos"){
        j = 0;
        let x = 0;
        let s = 0;
        for(alumno = i+2; this._data.data[alumno][0] !== undefined; alumno++){
          x = parseInt(this._data.data[alumno][5]) || 0;
          this.alumnos[j].qualification = parseFloat(this._data.data[alumno][this._data.data[alumno].length-1]) || 0;
          this.promFinalPract += x;
          this.alumnos[j].finalPractico! = x;
          if(x > 0){
            this.totalAlumnosFinalPract += 1;
          }
          s = parseInt(this._data.data[alumno][6]) || 0;
          this.alumnos[j].finalTeorico = s;
          this.promFinalTeo += s;
          if(s > 0){
            this.totalAlumnosFinalTeo += 1;
          }
          j++;
        }
        // i += alumno - i;
      }
    }
    this.promFinalPract = this.promFinalPract / this.totalAlumnosFinalPract;
    this.promFinalTeo = this.promFinalTeo / this.totalAlumnosFinalTeo;
    for(let i = 0; i < this.totalAlumnos; i++){
      if(this.alumnos[i].qualification >= 6){
        this.totalAprob += 1;
      }
    }
    this.totalAsistFull = this.totalAlumnos * this.totalClass;
    this.promedioApro = (this.totalAprob / this.totalAlumnos) * 100;
    this.promAsist = (this.totalAsist / this.totalAsistFull) * 100;
    console.log('/////////////////////////');
    console.log(this.alumnos)
    console.log('/////////////////////////');
    console.log('Nombre del curso: ', this.nameCourse);
    console.log('Nombre de la tecnologia: ', this.nameTecnology);
    console.log('Fecha del curso: ', this.dateCourse);
    console.log('Nombre del profesor: ', this.nameProfessor);
    console.log('Total de alumnos: ', this.totalAlumnos)
    console.log('Total de clases: ', this.totalClass)
    console.log('Total de aprobados: ', this.totalAprob)
    console.log('Promedio de alumnos aprobados: ', this.promedioApro)
    console.log('Total de asistencias: ', this.totalAsist)
    console.log('Promedio de asistencias por alumno ', this.promAsist)
    console.log('Promedio Final teorico: ', this.promFinalTeo)
    console.log('Promedio Final Practico: ', this.promFinalPract)
    console.log('Alumnos que rindieron Final Teorico: ', this.totalAlumnosFinalTeo)
    console.log('Alumnos que rindieron Final Practico: ', this.totalAlumnosFinalPract)
  }
  constructor(public _data: DataService) {
    this.cargarDatos();
  }
}
