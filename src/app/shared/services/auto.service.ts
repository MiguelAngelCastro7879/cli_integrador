import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { Auto, Estado, Movil } from 'src/app/Models/Auto';
import { Respuesta } from 'src/app/Models/Respuesta';
import { rutas } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AutoService {
  
  private _refresh$ = new Subject<void>()
  constructor(private http : HttpClient, private cookieService: CookieService) { }

  get refresh$(){
    return this._refresh$;
  }

  token = this.cookieService.get('token')
  header = new HttpHeaders().
  append('Content-Type', 'application/json').
  append('Authorization',`Bearer ${this.token}`)

  Movimiento(info:any){
    return this.http.post<Respuesta>(rutas.movimiento, info)
  }
  // GetAutos(){
    //   return this.http.get<Respuesta>(rutas.obtener, {headers:this.header})
    // }
   
  GetAutos(){
    return this.http.post<Respuesta>(rutas.obtenerAutosUsuario, {headers:this.header})
  }
  GetAuto(_id:any){
    return this.http.get<Respuesta>(rutas.Obtener+_id)
  }
  GetLeds(_id:any){
    return this.http.post<Respuesta>(rutas.leds,{auto: _id})
  }
  Enceder(_id:any){
    return this.http.post<Respuesta>(rutas.led, _id)
  }
  Apagar(_id:any){
    return this.http.post<Respuesta>(rutas.led,  _id)
  }

  postAutos(info: Movil):Observable<any>{
    return this.http.post<Respuesta>(rutas.crearAuto, info)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    ); 
  }  
}


