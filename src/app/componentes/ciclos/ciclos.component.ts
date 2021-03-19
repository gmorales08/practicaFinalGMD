import { AsignaturasService } from './../../servicios/asignaturas.service';
import { AsignaturasInterfaz } from './../../utils/AsignaturasInterfaz';
import { CiclosInterfaz } from './../../utils/CiclosInterfaz';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  listaAsignaturasTodas: AsignaturasInterfaz[] = [];
  listaAsignaturasDam: AsignaturasInterfaz[] = [];
  listaAsignaturasDaw: AsignaturasInterfaz[] = [];


  listaCiclos: CiclosInterfaz[] = [];
  listaCiclosDam: CiclosInterfaz[] = [];
  listaCiclosDaw: CiclosInterfaz[] = [];

  servicioAsignaturas: AsignaturasService

  asignaturasADetallar: AsignaturasInterfaz[] = [];
  listaAuxiliar: AsignaturasInterfaz[] = []

  constructor(public servicio: AsignaturasService) { }

  ngOnInit(): void {
    this.servicioAsignaturas = this.servicio;

    this.listaAsignaturasTodas = this.servicioAsignaturas.getAsignaturasTodas();
    this.listaAsignaturasDam = this.servicioAsignaturas.getAsignaturasDam();
    this.listaAsignaturasDaw = this.servicioAsignaturas.getAsignaturasDaw();

    this.listaCiclos = this.servicioAsignaturas.getCiclosTodos();
    this.listaCiclosDam = this.servicioAsignaturas.getCiclosDam();
    this.listaCiclosDaw = this.servicioAsignaturas.getCiclosDaw();
  }

  filtrarAsignaturasDam(curso: number) {
    this.listaAuxiliar = []
    return this.listaAsignaturasDam.filter(asignatura=> {
      if (asignatura.curso == curso) {
        this.listaAuxiliar.push(asignatura)
      }
      // console.log(this.listaAuxiliar);
      
      this.pasarDetalle(this.listaAuxiliar, this.servicio.getImagenDam(), curso);
    });
  }

  filtrarAsignaturasDaw(curso: number) {
    this.listaAuxiliar = []
    return this.listaAsignaturasDaw.filter(asignatura=> {
      if (asignatura.curso == curso) {
        this.listaAuxiliar.push(asignatura)
      }
      // console.log(this.listaAuxiliar);
      
      this.pasarDetalle(this.listaAuxiliar, this.servicio.getImagenDaw(), curso);
    });
  }

  pasarDetalle(asignaturas: AsignaturasInterfaz[], ciclo, curso) {
    this.servicio.setListaAsignaturasADetallar(asignaturas, ciclo, curso);
  }

}
