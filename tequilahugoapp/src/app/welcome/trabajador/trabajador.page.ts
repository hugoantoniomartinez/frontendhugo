import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajador } from '../../interfaces/trabajador.interface';
import { TrabajadorService } from '../../servicios/trabajador.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.page.html',
  styleUrls: ['./trabajador.page.scss'],
})
export class TrabajadorPage implements OnInit {
  Catalogo : Trabajador [] =[];
  Trabajador: any;
trabajador: any;

  constructor( private trabajadorservice:TrabajadorService, private router: Router ) { }

  ngOnInit() {
    this.trabajadorservice.mostrar()
    .subscribe(data => {
      this.Trabajador = data;
    })
  }
}
