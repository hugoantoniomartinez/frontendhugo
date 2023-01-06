import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogo } from '../../interfaces/catalogo.interface';
import { CatalogoService } from '../../servicios/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  Catalogo : Catalogo [] =[];

  constructor( private catalgoservice:CatalogoService, private router: Router ) { }

  ngOnInit() {
    this.catalgoservice.mostrar()
    .subscribe(data => {
      this.Catalogo = data;
    })
  }
}
