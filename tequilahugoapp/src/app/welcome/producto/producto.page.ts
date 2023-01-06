import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  Catalogo : Producto [] =[];
Producto: any;
  Comprador: any;
  compradorservice: any;

  constructor( private productoservice:ProductoService, private router: Router ) { }

  ngOnInit() {
    this.compradorservice.mostrar()
    .subscribe((data: any) => {
      this.Comprador = data;
    })
  }
}
