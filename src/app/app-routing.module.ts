import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { InicioComponent } from './componentes/estructura/inicio/inicio.component';

const routes: Routes = [
  { path: 'index', component: InicioComponent },
  {
    path: 'auth',
    loadChildren: () => import('./routing/auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }