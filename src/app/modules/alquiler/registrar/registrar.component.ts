import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alquileres } from 'src/app/model/alquiler';
import { AlquilerService } from '../../services/alquiler.service';
import { Lectores } from 'src/app/model/lectores';
import { Libros } from 'src/app/model/libros';
import { LectorService } from '../../services/lector.service';
import { LibroService } from '../../services/libros.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  alquiler: Alquileres = new Alquileres();
  lector: Lectores[] = [];
  libro: Libros[]=[];
  constructor(
    private alquilerService: AlquilerService,
    private lectorService: LectorService,
    private libroService: LibroService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.ListarLector()
    this.ListarLibro()
    
  }
  onSubmit() {
    this.createTutorial();
  }
  ListarLector() {
    this.lectorService.listar().subscribe(data => {
      this.lector = data;  
    });
  }
  ListarLibro() {
    this.libroService.listar().subscribe(data => {
      this.libro = data;  
    });
  }
  createTutorial() {
    this.alquilerService.crear(this.alquiler).subscribe(data => {
      console.log(data);
      this.irAlquiler();
    });
  }
  irAlquiler(){
    this.router.navigate(["/home/alquiler"]);
  }

}
