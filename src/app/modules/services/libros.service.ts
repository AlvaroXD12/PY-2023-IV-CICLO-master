import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libros } from 'src/app/model/libros';


@Injectable({
  providedIn: 'root'
})

export class LibroService {

  private url: string = 'http://localhost:9195/v1/libros';

  constructor(private http: HttpClient) { }
  listar(): Observable<Libros[]> {
    return this.http.get<Libros[]>(this.url + '/all');
  }

  crear(libros: Libros){
    return this.http.post<string>(this.url +'/add' , libros);
  }

  editar(id: number, libros: Libros) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, libros);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDlibros(id: number): Observable<any> {
    return this.http.get<Libros>(this.url + '/' + id);
  }
  
}
