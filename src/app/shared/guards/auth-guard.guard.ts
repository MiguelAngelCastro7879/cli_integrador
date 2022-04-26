import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){}

  canActivate(){
    return this.canLoad();
  }
  
  canLoad(){
      if (!this.auth.isLoggedIn()) {
        this.router.navigate(['/auth/login']);
      }
      return this.auth.isLoggedIn();
  }
  
}
