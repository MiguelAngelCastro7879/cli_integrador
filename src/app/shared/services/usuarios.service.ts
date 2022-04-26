import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { Respuesta } from '../../Models/Respuesta';
import { rutas } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

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
    return this.http.get<Respuesta>(rutas.usuarios)
  }
  getOne(){
    return this.http.get<Respuesta>(rutas.usuarios)
  }
  getUser(id:number): Observable<any>{
    return this.http.get<Respuesta>(rutas.usuarios+'/'+id)
  }
  status(id:any){
    return this.http.delete<Respuesta>(rutas.usuarios+'/'+id)
  }
  update(id:any, info: User): Observable<any>{
    return this.http.put<Respuesta>(rutas.usuarios+'/'+id, info)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    ); 
  }
  logout(){
    this.token = this.cookieService.get('token')
    const header = new HttpHeaders()
    .set( 'Content-Type','application/json')
    .set('Authorization', `Bearer ${this.token}`) 
    this.cookieService.delete('token', '/', 'localhost', false, 'Lax')
    this.cookieService.deleteAll()
   return this.http.post<Respuesta>(rutas.logout, {headers:header})
  }
}
