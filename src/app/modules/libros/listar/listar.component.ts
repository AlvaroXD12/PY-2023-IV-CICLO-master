import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/model/libros';
import { LibroService } from '../../services/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarLComponent implements OnInit {
  libros: Libros[] = [];
  libro: Libros = new Libros();

  constructor(
    private libroService: LibroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.Listar()
  }
  Listar() {
    this.libroService.listar().subscribe(data => {
      this.libros = data;
    });
  }
  
  Eliminar(id: number) {
    this.libroService.eliminar(id).subscribe(() => {
      this.libroService.listar().subscribe(data => {
        this.libros = data;
        console.log(data);
      });
    });
  }
}
