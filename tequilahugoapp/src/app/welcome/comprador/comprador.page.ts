import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comprador } from '../../interfaces/comprador.interface';
import { CompradorService } from '../../servicios/comprador.service';

@Component({
  selector: 'app-comprador',
  templateUrl: './comprador.page.html',
  styleUrls: ['./comprador.page.scss'],
})
export class CompradorPage implements OnInit {
  Comprador : Comprador [] =[];

  constructor( private compradorservice:CompradorService, private router: Router ) { }

  ngOnInit() {
    this.compradorservice.mostrar()
    .subscribe(data => {
      this.Comprador = data;
    })
  }
}
