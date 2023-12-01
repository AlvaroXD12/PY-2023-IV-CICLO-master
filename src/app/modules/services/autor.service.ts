import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autores } from 'src/app/model/autor';




@Injectable({
  providedIn: 'root'
})

export class AutorService {

  private url: string = 'http://localhost:9195/v1/autores';

  constructor(private http: HttpClient) { }
  listar(): Observable<Autores[]> {
    return this.http.get<Autores[]>(this.url + '/all');
  }

  crear(autores: Autores){
    return this.http.post<string>(this.url +'/add' , autores);
  }

  editar(id: number, autores: Autores) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, autores);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDautores(id: number): Observable<any> {
    return this.http.get<Autores>(this.url + '/' + id);
  }
  
}
