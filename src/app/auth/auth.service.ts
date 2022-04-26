import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { rutas } from 'src/environments/environment';
import { Respuesta } from '../Models/Respuesta';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  constructor(
    private http: HttpClient,
    private _cookieService: CookieService) {}

  login(info: User): Observable<any>{
    this._isLoggedIn$.next(!!this.getJwtToken())
    return this.http.post<Respuesta>(rutas.login, info)
  }
  
  register(info: User): Observable<any>{
    this._isLoggedIn$.next(!!this.getJwtToken())
    return this.http.post<Respuesta>(rutas.register, info)
  }

  
  getUser(): Observable<any>{
    this._isLoggedIn$.next(!!this.getJwtToken())
    return this.http.get<Respuesta>(rutas.token_validacion)
  }




  setToken(token: string): void {
    this._cookieService.set('token',token,4,'/')
  }

  getJwtToken() {
    return this._cookieService.get('token');
  }

  removeToken(): void {
    this._cookieService.delete('token');
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }
}
