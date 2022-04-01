import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterGuard } from './shared/guards/login-register.guard';

const routes: Routes = [
  
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  // {path:'login', component: LoginComponent},
  // {path:'register', component: RegisterComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivateChild:[LoginRegisterGuard]
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }