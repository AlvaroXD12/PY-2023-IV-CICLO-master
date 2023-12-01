import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editoriales } from 'src/app/model/editoriales';




@Injectable({
  providedIn: 'root'
})

export class EditorialService {

  private url: string = 'http://localhost:9195/v1/editoriales';

  constructor(private http: HttpClient) { }
  listar(): Observable<Editoriales[]> {
    return this.http.get<Editoriales[]>(this.url + '/all');
  }

  crear(editoriales: Editoriales){
    return this.http.post<string>(this.url +'/add' , editoriales);
  }

  editar(id: number, editoriales: Editoriales) : Observable<Object>{
    return this.http.put(this.url + '/edit/' + id, editoriales);
  }
  
  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  }

  IDeditoriales(id: number): Observable<any> {
    return this.http.get<Editoriales>(this.url + '/' + id);
  }
  
}
