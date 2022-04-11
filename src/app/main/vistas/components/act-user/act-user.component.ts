import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-act-user',
  templateUrl: './act-user.component.html',
  styleUrls: ['./act-user.component.css']
})
export class ActUserComponent implements OnInit {

  hide = true;

  constructor(private u:UsuariosService, private ruter:Router, private cookies:CookieService) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    nombre : new FormControl('', [Validators.required, Validators.minLength(5)]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  send(){
    if(this.form.invalid){
      return;
    }
  
  this.u.update(this.form.get('nombre')?.value, this.form.get('email')?.value)
  .subscribe((response: any)=>{
    console.log(response);
    this.ruter.navigate(['/vistas']);
    this.cookies.set('token',response.token!.token!,1,'/')
  });
}
}
