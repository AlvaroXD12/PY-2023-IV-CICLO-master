import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alquileres } from 'src/app/model/alquiler';



@Injectable({
  providedIn: 'root'
})

export class AlquilerService {

  private url: string = 'http://localhost:9195/v1/alquileres';

  constructor(private http: HttpClient) { }
  listar(): Observable<Alquileres[]> {
    return this.http.get<Alquileres[]>(this.url + '/all');
  }

  crear(alquileres: Alquileres): Observable<Object>{
    return this.http.post<Alquileres>(this.url +'/add' , alquileres);
  }

  editar(id: number, alquileres: Alquileres) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, alquileres);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDalquileres(id: number): Observable<any> {
    return this.http.get<Alquileres>(this.url + '/' + id);
  }
  
}
