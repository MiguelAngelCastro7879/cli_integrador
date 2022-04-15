import { Injectable } from '@angular/core';
import { rutas } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject, tap } from 'rxjs';
import { sensor } from 'src/app/Models/sensores';
import { Respuesta } from 'src/app/Models/Respuesta';

@Injectable({
  providedIn: 'root'
})

export class SensoresService 
{
  private _refresh$ = new Subject<void>()
  
  constructor( private http: HttpClient, private cookieService: CookieService) { }
  
  get refresh$(){
    return this._refresh$;
  }

  token = this.cookieService.get('token')
  header = new HttpHeaders().
  append('Content-Type', 'application/json').
  append('Authorization',`Bearer ${this.token}`)
  
  getAll(): Observable<any>{
    return this.http.get<Respuesta>(rutas.sensores, {headers:this.header})
  }
  get(id:any): Observable<any>{
    return this.http.get<Respuesta>(rutas.sensor+'/'+id, {headers:this.header})
  }
  status(id:any){
    return this.http.delete<Respuesta>(rutas.sensores+'/'+id, {headers:this.header})
  }
  update(id:any, info: sensor): Observable<any>{
    return this.http.put<Respuesta>(rutas.sensores+'/'+id, info, {headers:this.header})
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }
}