import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from 'src/app/model/categoria';




@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  private url: string = 'http://localhost:9195/v1/categorias';

  constructor(private http: HttpClient) { }
  listar(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.url + '/all');
  }

  crear(categorias: Categorias){
    return this.http.post<string>(this.url +'/add' , categorias);
  }

  editar(id: number, categorias: Categorias) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, categorias);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDcategorias(id: number): Observable<any> {
    return this.http.get<Categorias>(this.url + '/' + id);
  }
  
}
