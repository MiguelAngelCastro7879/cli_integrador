import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/Models/User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public loginValid = true;
  public user :User ={}

  // private readonly returnUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _cookieService: CookieService
  ) {
    // this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  public ngOnInit(): void {
    // this._authService.isAuthenticated$.pipe(
    //   filter((isAuthenticated: boolean) => isAuthenticated),
    //   takeUntil(this._destroySub$)
    // ).subscribe( _ => this._router.navigateByUrl(this.returnUrl));
  }

  public ngOnDestroy(): void {
  }

  public onSubmit(): void {
    // this.loginValid = true;
    this._authService.register(this.user).subscribe(respuesta=>{
      alert(respuesta.mensaje!)
      //#######################################################################
      this._authService.login(this.user).subscribe(respuesta=>{
        // console.log(respuesta.access_token!.token)
        this._cookieService.set('token',respuesta.access_token!.token!,4,'/')
        this._router.navigate(['/main']);
        // alert('Sesion iniciada')
      }, error=>{
        // console.log()
        alert(error.error.error)
      });
      //#######################################################################
    },error=>{
      alert(error.error.error)
    })
  }
}
