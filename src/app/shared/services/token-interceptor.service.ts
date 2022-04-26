import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(
    private router: Router,
    private _cookieService: CookieService,
    private auth: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const token = this.auth.getJwtToken()

    let request = req;

    if(!token){
      return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
  
          if (err.status === 401) {
            this.router.navigateByUrl('auth/login');
          }
          return throwError( err );
        })
      );
    }
    const headers = req.clone({headers:req.headers.set('Authorization', `Bearer ${token}`).append('Content-Type', 'application/json')
    }); 
    return next.handle(headers);
}
}
