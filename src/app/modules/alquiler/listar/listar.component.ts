import { Component, OnInit } from '@angular/core';
import { Alquileres } from 'src/app/model/alquiler';

import { Router } from '@angular/router';
import { AlquilerService } from '../../services/alquiler.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],

})
export class ListarComponent implements OnInit {
  alquiler: Alquileres[] = [];
  alquilers: Alquileres = new Alquileres();

  constructor(
    private alquilerService: AlquilerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.Listar()
  }
  Listar() {
    this.alquilerService.listar().subscribe(data => {
      this.alquiler = data;
    });
  }
  Editar(id: number) {
    this.alquilerService.editar(id, this.alquilers).subscribe(dato => {
      this.router.navigate(['/home/alquiler/editar']);
    })
  }
  Eliminar(id: number) {
    this.alquilerService.eliminar(id).subscribe(() => {
      this.alquilerService.listar().subscribe(data => {
        this.alquiler = data;
        console.log(data);
      });
    });
  }
}
