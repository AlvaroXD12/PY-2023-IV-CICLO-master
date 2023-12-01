import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lectores } from 'src/app/model/lectores';




@Injectable({
  providedIn: 'root'
})

export class LectorService {

  private url: string = 'http://localhost:9195/v1/lectores';

  constructor(private http: HttpClient) { }
  listar(): Observable<Lectores[]> {
    return this.http.get<Lectores[]>(this.url + '/all');
  }

  crear(lectores: Lectores){
    return this.http.post<string>(this.url +'/add' , lectores);
  }

  editar(id: number, lectores: Lectores) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, lectores);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDelectores(id: number): Observable<any> {
    return this.http.get<Lectores>(this.url + '/' + id);
  }
  
}
