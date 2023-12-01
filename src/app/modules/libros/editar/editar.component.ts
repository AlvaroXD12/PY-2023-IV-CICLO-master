import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libros } from 'src/app/model/libros';
import { LibroService } from '../../services/libros.service';
import { Autores } from 'src/app/model/autor';
import { Categorias } from 'src/app/model/categoria';
import { Editoriales } from 'src/app/model/editoriales';
import { AutorService } from '../../services/autor.service';
import { CategoriaService } from '../../services/categoria.service';
import { EditorialService } from '../../services/editorial.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarLComponent implements OnInit {
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
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.Editarlibro()
    this.ListarAutor()
    this.ListarCategoria()
    this.ListarEditorial()
    
  }
  onSubmit() {
    this.createTutorial();
  }
  Editarlibro(){
    this.route.params.subscribe(params => {
      const id = params['id']
      console.log(id);  
      this.librosService.IDlibros(id).subscribe(data =>{
        this.libro = data
        console.log(data);
      }) 
    })
  }
  ListarAutor() {
    this.autorService.listar().subscribe(data => {
      this.autor = data; 
      const autor = this.autor.find(auto => auto.id === this.libro.autores?.id);
        if (autor) {
          this.libro.autores = autor;
        } else {
          console.error('Autor no encontrado'); 
        } 
    });
  }
  ListarCategoria() {
    this.categoriaService.listar().subscribe(data => {
      this.categoria = data;
      const categoria = this.categoria.find(cate => cate.id === this.libro.categorias?.id);
        if (categoria) {
          this.libro.categorias = categoria;
        } else {
          console.error('Categoria no encontrado'); 
        }
    });
  }
  ListarEditorial() {
    this.editorialService.listar().subscribe(data => {
      this.editorial = data;
      const editorial = this.editorial.find(edit => edit.id === this.libro.editoriales?.id);
        if (editorial) {
          this.libro.editoriales = editorial;
        } else {
          console.error('Editorial no encontrado'); 
        }  
    });
  }
  createTutorial() {
    this.librosService.crear(this.libro).subscribe(data => {
      console.log(data);
      this.irLibro();
    });
  }
  irLibro(){
    this.router.navigate(["/home/libro"]);
  }

}

 

