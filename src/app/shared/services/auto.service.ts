import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Auto, Movil } from 'src/app/Models/Auto';
import { Respuesta } from 'src/app/Models/Respuesta';
import { rutas } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private http : HttpClient, private cookieService: CookieService) { }

  token = this.cookieService.get('token')
  header = new HttpHeaders().
  append('Content-Type', 'application/json').
  append('Authorization',`Bearer ${this.token}`)

  Movimiento(info:any){
    return this.http.post<Respuesta>(rutas.movimiento, info, {headers:this.header})
  }
  // GetAutos(){
    //   return this.http.get<Respuesta>(rutas.obtener, {headers:this.header})
    // }
   
  GetAutos(){
    return this.http.post<Respuesta>(rutas.obtenerAutosUsuario, {headers:this.header})
  }
  GetAuto(_id:any){
    return this.http.get<Respuesta>(rutas.Obtener+_id,{headers:this.header})
  }
  GetLeds(_id:any){
    return this.http.post<Respuesta>(rutas.leds,{auto: _id}, {headers:this.header})
  }
  Enceder(body:any){
    return this.http.post<Respuesta>(rutas.led, body , {headers:this.header})
  }

  postAutos(info: Movil){
    return this.http.post<Respuesta>(rutas.crearAuto, info)
  }
    
}
function successDialog(arg0: string) {
  throw new Error('Function not implemented.');
}

function errorMessage(arg0: any) {
  throw new Error('Function not implemented.');
}

