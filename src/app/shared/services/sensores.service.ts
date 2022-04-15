import { Injectable } from '@angular/core';
import { rutas } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject, tap } from 'rxjs';
import { sensor, respSen } from 'src/app/Models/sensores';

@Injectable({
  providedIn: 'root'
})

export class SensoresService 
{
  private _refresh$ = new Subject<void>()
  
  constructor( private http: HttpClient, private cookieService: CookieService) { }
  

  getAll(): Observable<any>{
    return this.http.get<respSen>(rutas.sensores)
  }
  getOne(){
    return this.http.get<respSen>(rutas.sensores)
  }
  get(id:number): Observable<any>{
    return this.http.get<respSen>(rutas.sensores+'/'+id)
  }
  delete(indice:any){
    return this.http.delete<respSen>(rutas.sensores+'/'+indice)
  }
  update(id:any, info: sensor): Observable<any>{
    return this.http.put<respSen>(rutas.sensores+'/'+id, info)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }
}