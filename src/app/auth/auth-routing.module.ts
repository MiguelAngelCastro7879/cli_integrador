import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterGuard } from '../shared/guards/login-register.guard';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', component: LoginComponent,    canActivateChild:[LoginRegisterGuard]},
  {path:'register', component: RegisterComponent,     canActivateChild:[LoginRegisterGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
