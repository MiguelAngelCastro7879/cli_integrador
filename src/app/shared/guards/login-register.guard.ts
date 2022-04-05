import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterGuard implements CanActivateChild {
  
  constructor(private router:Router,private _authService: AuthService, private _cookieService:CookieService){
  }
  
  
  redireccion(cookies:boolean):any{
    if(cookies){
      return this.router.navigate(['/main']);
    }else{
      return this.router.navigate(['/auth/login']);
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this._authService.isLoggedIn()) {
      this.router.navigate(['/main']);
    }
    return !this._authService.isLoggedIn();
  }
}
