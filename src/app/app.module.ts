import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { DataService } from './servicios/data.service';
import { AlumnosComponent } from './curso/alumnos/alumnos.component';
import { AsistenciasComponent } from './curso/asistencias/asistencias.component';
import { CalificacionesComponent } from './curso/calificaciones/calificaciones.component';
import { ClasesComponent } from './curso/clases/clases.component';
import { CaidosComponent } from './curso/caidos/caidos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    AlumnosComponent,
    AsistenciasComponent,
    CalificacionesComponent,
    ClasesComponent,
    CaidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
