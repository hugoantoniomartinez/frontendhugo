import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venta } from '../../interfaces/venta.interface';
import { VentaService } from '../../servicios/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage implements OnInit {
  Catalogo : Venta [] =[];
  Venta: any;

  constructor( private ventaservice:VentaService, private router: Router ) { }

  ngOnInit() {
    this.ventaservice.mostrar()
    .subscribe(data => {
      this.Venta = data;
    })
  }
}
