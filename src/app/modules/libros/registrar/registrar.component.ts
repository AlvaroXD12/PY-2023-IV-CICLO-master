import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libros } from 'src/app/model/libros';
import { LibroService } from '../../services/libros.service';
import { Autores } from 'src/app/model/autor';
import { Categorias } from 'src/app/model/categoria';
import { Editoriales } from 'src/app/model/editoriales';
import { AutorService } from '../../services/autor.service';
import { CategoriaService } from '../../services/categoria.service';
import { EditorialService } from '../../services/editorial.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarLComponent implements OnInit {
  libro: Libros = new Libros();
  autor: Autores[] = [];
  categoria: Categorias[] = [];
  editorial: Editoriales[] = [];
  constructor(
    private librosService: LibroService,
    private autorService: AutorService,
    private categoriaService: CategoriaService,
    private editorialService: EditorialService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.ListarAutor()
    this.ListarCategoria()
    this.ListarEditorial()
    
  }
  onSubmit() {
    this.createTutorial();
  }
  ListarAutor() {
    this.autorService.listar().subscribe(data => {
      this.autor = data;  
    });
  }
  ListarCategoria() {
    this.categoriaService.listar().subscribe(data => {
      this.categoria = data;  
    });
  }
  ListarEditorial() {
    this.editorialService.listar().subscribe(data => {
      this.editorial = data;  
    });
  }
  createTutorial() {
    this.librosService.crear(this.libro).subscribe(data => {
      console.log(data);
      this.irAlquiler();
    });
  }
  irAlquiler(){
    this.router.navigate(["/home/libro"]);
  }

}
