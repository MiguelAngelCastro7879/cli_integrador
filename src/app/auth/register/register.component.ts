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
  public load: boolean = true;
 
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
    
    this.load = false;

    this._authService.register(this.user).subscribe(respuesta=>{
        this._authService.login(this.user).subscribe(respuesta=>{
          this._authService.setToken(respuesta.access_token!.token!)
          this._router.navigate(['/main/2']);
          alert('Sesion iniciada')
          this.load = true
        }, error=>{
          // console.log(error)
          alert(error.error.error)
          this.load = true
        });
    },error=>{
      alert(error.error.error)
      this.load = true
    })
  }
}
