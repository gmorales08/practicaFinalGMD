import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { CiclosComponent } from './componentes/ciclos/ciclos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AsignaturasComponent } from './componentes/asignaturas/asignaturas.component';
import { CicloDetalleComponent } from './componentes/ciclo-detalle/ciclo-detalle.component';
import { UpperPipe } from './pipes/upper.pipe';
import { LowerPipe } from './pipes/lower.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CiclosComponent,
    NavbarComponent,
    AsignaturasComponent,
    CicloDetalleComponent,
    UpperPipe,
    LowerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
