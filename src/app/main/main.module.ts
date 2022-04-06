import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MainComponent2 } from './main copy/main.component';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { VistasComponent } from './vistas/vistas.component';
import { GraficasComponent } from './graficas/graficas.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule }from '@angular/material/list';

@NgModule({
  declarations: [
    MainComponent,
    MainComponent2,
    VistasComponent,
    GraficasComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatCardModule,
    MatMenuModule,
    MatListModule
  ],
})
export class MainModule { }
