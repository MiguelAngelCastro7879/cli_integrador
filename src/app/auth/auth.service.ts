import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Respuesta } from '../Models/Respuesta';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');
  }
  
  login(info: User){
    console.log('Login');
    return this.http.post<Respuesta>(`${environment.urlbase}/login`, info)
  }
}
