import { Lectores } from "./lectores";
import { Libros } from "./libros";

export class Alquileres{
    id?: number;
    fecha_entrada?: Date;
    fecha_salida?: Date;
    lectores?:Lectores;
    libros?:Libros;
}