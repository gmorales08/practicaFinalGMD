import { CicloDetalleComponent } from './componentes/ciclo-detalle/ciclo-detalle.component';
import { AsignaturasComponent } from './componentes/asignaturas/asignaturas.component';
import { CiclosComponent } from './componentes/ciclos/ciclos.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent},
  { path: 'ciclos', component: CiclosComponent},
  { path: 'asignaturas', component: AsignaturasComponent},
  { path: 'detalleCiclo', component: CicloDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
