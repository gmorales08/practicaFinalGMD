import { UpperPipe } from './../../pipes/upper.pipe';
import { AsignaturasInterfaz } from './../../utils/AsignaturasInterfaz';
import { CiclosInterfaz } from './../../utils/CiclosInterfaz';
import { AsignaturasService } from './../../servicios/asignaturas.service';
import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-ciclo-detalle',
  templateUrl: './ciclo-detalle.component.html',
  styleUrls: ['./ciclo-detalle.component.css']
})
export class CicloDetalleComponent implements OnInit {

  asignaturasADetallar: AsignaturasInterfaz[] = [];
  cicloADetallar: string = "";
  cursoADetallar: number = 0;
  imagen = "";

  listaConocimientos: String[] = [];
  variableAuxiliar: string = "";

  constructor(public servicio: AsignaturasService) { }

  ngOnInit(): void {
    this.asignaturasADetallar = this.servicio.getListaAsignaturasADetallar();
    this.cicloADetallar = this.servicio.getCicloADetallar();
    this.cursoADetallar = this.servicio.getCursoADetallar();
    this.imagen = this.servicio.getCicloADetallar();
    console.log(this.asignaturasADetallar);
    // this.establecerImagen();
    this.calcularConocimientos();
  }

  calcularConocimientos() {
    this.asignaturasADetallar.forEach(asignatura => {
      asignatura.conocimientos.forEach(conocimiento => {
        if (!this.listaConocimientos.includes(conocimiento.nombre)) {
          this.listaConocimientos.push(conocimiento.nombre);
        }
      });
    });
  }

  verDetalle(asingatura: AsignaturasInterfaz) {
    this.variableAuxiliar = "";
    asingatura.conocimientos.forEach(conocimiento => {
      this.variableAuxiliar += (conocimiento.nombre + ", ");
    });

    alert("La asignatura " + (asingatura.nombre) + " la imparte " +
    asingatura.profesor + " en el ciclo " + asingatura.ciclo + 
    " durante el curso " + asingatura.curso + "\n" + 
    "En esta asignatura aprenderas: " + this.variableAuxiliar);
  }

  /*establecerImagen() {
    
    this.asignaturasADetallar.forEach(asignatura => {
      this.ciclos.push(asignatura.ciclo)
    });

    if (this.ciclos.every(this.perteneceADam)) {
      this.imagen = this.servicio.getImagenDam();
    } else if (this.ciclos.every(this.perteneceADaw)) {
      this.imagen = this.servicio.getImagenDaw();
    }
  }

  perteneceADam(asignatura: String) {
    if (asignatura.toUpperCase().includes("DAM")) {
      return true;
    }
  }

  perteneceADaw(asignatura: String) {
    if (asignatura.toUpperCase().includes("DAW")) {
      return true;
    }
  }*/

}
