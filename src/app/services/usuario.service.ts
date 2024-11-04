import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/usuario'

  constructor(private http:HttpClient) { }

  getUserId(id:number): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  registrarUsuario(usuario:User): Observable<Object>
  {
    return this.http.post(this.apiUrl, usuario);
  }
}
