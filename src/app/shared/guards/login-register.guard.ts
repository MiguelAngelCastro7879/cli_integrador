import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterGuard implements CanActivateChild {
  
  constructor(private router:Router,private _authService: AuthService, private cookieService: CookieService){
  }
  redireccion(cookies:boolean):any{
    if(!cookies){
      return this.router.navigate(['/main']);
    }
  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie=this.cookieService.check('token');
    let activar = true
    this._authService.validar().subscribe(
      respuesta=>{ 
        activar = true
      },error=>{
        activar =false
      }
    )
    console.log(activar)
    return cookie
  }
}
