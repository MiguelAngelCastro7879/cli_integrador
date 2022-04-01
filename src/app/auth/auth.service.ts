import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from '../Models/Respuesta';
import { rutas } from '../Models/rutas.const';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');
  }
  
  login(info: User){
    return this.http.post<Respuesta>(rutas.login, info)
  }
  
  register(info: User){
    return this.http.post<Respuesta>(rutas.register, info)
  }

  validar(){
    return this.http.get<Respuesta>(rutas.token_validacion)
  }
}
