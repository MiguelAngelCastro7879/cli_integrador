import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from 'src/app/Models/Respuesta';
import { rutas } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) {}

  getViews(){
    return this.http.get<Respuesta>(rutas.obtenerVistas)
  }
}
