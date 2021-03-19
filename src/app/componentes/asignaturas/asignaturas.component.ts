import { AsignaturasService } from './../../servicios/asignaturas.service';
import { AsignaturasInterfaz } from './../../utils/AsignaturasInterfaz';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturasFiltradas: AsignaturasInterfaz[] = [];
  asignaturasTodas: AsignaturasInterfaz[] = [];

  constructor(public servicio: AsignaturasService) { }

  ngOnInit(): void {
    this.asignaturasTodas = this.servicio.getAsignaturasTodas();
    this.asignaturasFiltradas = this.asignaturasTodas;
  }

  filtrar(nombre: string, ciclo: string, conocimientos: string) {
    this.asignaturasFiltradas = []
    this.asignaturasTodas.forEach(asignatura => {
      if (nombre.length == 0) {
        if (ciclo.length == 0) {
          asignatura.conocimientos.forEach(conocimiento => {
            if (conocimiento.nombre.toLowerCase().includes(conocimientos.toLowerCase())) {
              this.asignaturasFiltradas.push(asignatura);
            }
          });
        } else if (conocimientos.length == 0) {
          if (asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
            this.asignaturasFiltradas.push(asignatura);
          }
        } else {
          if (asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
            asignatura.conocimientos.forEach(conocimiento => {
              if (conocimiento.nombre.toLowerCase().includes(conocimientos.toLowerCase())) {
                this.asignaturasFiltradas.push(asignatura);
              }
            });
          }
        }
      } else if (ciclo.length == 0) {
        if (conocimientos.length == 0) {
          if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase())) {
            this.asignaturasFiltradas.push(asignatura);
          }
        } else {
          if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase())) {
            asignatura.conocimientos.forEach(conocimiento => {
              if (conocimiento.nombre.toLowerCase().includes(conocimientos.toLowerCase())) {
                this.asignaturasFiltradas.push(asignatura);
              }
            });
          }
        }
      } else if (conocimientos.length == 0) {
        if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase()) && asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
          this.asignaturasFiltradas.push(asignatura);
        }
      } else {
        asignatura.conocimientos.forEach(conocimiento => {
          if (conocimiento.nombre.toLowerCase().includes(conocimientos.toLowerCase())) {
            if (asignatura.nombre.toLowerCase().includes(nombre.toLowerCase()) && asignatura.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
              this.asignaturasFiltradas.push(asignatura);
            }
          }
        });
      }
    });
  }

}
