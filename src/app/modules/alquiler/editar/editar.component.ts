import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alquileres } from 'src/app/model/alquiler';
import { AlquilerService } from '../../services/alquiler.service';
import { Lectores } from 'src/app/model/lectores';
import { Libros } from 'src/app/model/libros';
import { LectorService } from '../../services/lector.service';
import { LibroService } from '../../services/libros.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  alquiler: Alquileres = new Alquileres();
  lector: Lectores[] = [];
  libro: Libros[]=[];
  constructor(
    private alquilerService: AlquilerService,
    private lectorService: LectorService,
    private libroService: LibroService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.Editaralquiler()
    this.ListarLector()
    this.ListarLibro()
    
  }
  onSubmit() {
    this.createTutorial();
  }
  Editaralquiler(){
    this.route.params.subscribe(params => {
      const proyecto = params['proyecto']
      console.log(proyecto);  
      this.alquilerService.IDalquileres(proyecto).subscribe(data =>{
        this.alquiler = data
        console.log(data);
      }) 
    });
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
