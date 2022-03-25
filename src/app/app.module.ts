import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './componentes/estructura/sidebar/sidebar.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { InicioComponent } from './componentes/estructura/inicio/inicio.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
