import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { Respuesta } from '../../Models/Respuesta';
import { rutas } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient, private cookieService: CookieService) { }

  token = this.cookieService.get('token')
  header = new HttpHeaders().
  append('Content-Type', 'application/json').
  append('Authorization',`Bearer ${this.token}`)
  
  
  getAll(): Observable<any>{
    return this.http.get<Respuesta>(rutas.usuarios, {headers:this.header})
  }
  getOne(indice:any){
    return this.http.get<Respuesta>(rutas.usuarios+'/'+indice, {headers:this.header})
  }
  delete(indice:any){
    return this.http.delete<Respuesta>(rutas.usuarios+'/'+indice, {headers:this.header})
  }
  update(indice:any, info: User){
    return this.http.put<Respuesta>(rutas.usuarios+'/'+indice, info, {headers:this.header})
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
