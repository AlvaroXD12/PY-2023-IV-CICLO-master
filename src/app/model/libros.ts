import { Autores } from "./autor";
import { Categorias } from "./categoria";
import { Editoriales } from "./editoriales";

export class Libros{
    id?: number;
    titulo?: string;
    fecha_lanzamiento?: Date;
    idioma?:string;
    paginas?:number;
    descripcion?:string;
    portada?:string;
    autores?:Autores;
    categorias?:Categorias;
    editoriales?:Editoriales;
    
}