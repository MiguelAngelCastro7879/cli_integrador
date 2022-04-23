import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MainComponent2 } from './main copy/main.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VistasComponent } from './vistas/vistas.component';
import { ActUserComponent } from './vistas/components/act-user/act-user.component';
import { VerComponent } from './vistas/components/ver/ver.component';
import { ActuaSensComponent } from './vistas/components/Sens/actua-sens/actua-sens.component';
import { VerSensComponent } from './vistas/components/Sens/ver-sens/ver-sens.component';
import { SenStatusComponent } from './vistas/components/Sens/sen-status/sen-status.component';
import { UserStatusComponent } from './vistas/components/user-status/user-status.component';
import { AppComponent } from '../app.component';
import { NgChartsModule } from 'ng2-charts';
import { GraficasComponent } from './graficas/graficas.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ControlesComponent } from './controles/controles.component';
import { CrearComponent } from './graficas/crear/crear.component';
import { MostrarComponent } from './vistas/components/Mongo/mostrar/mostrar.component';
import { LedsComponent } from './vistas/components/Mongo/leds/leds.component';
import { GraficaComponent } from './vistas/components/Mongo/grafica/grafica.component';
import { CrearVistaComponent } from './vistas/components/Mongo/crear-vista/crear-vista.component';

@NgModule({
  declarations: [
    MainComponent,
    MainComponent2,
    VistasComponent,
    ActUserComponent,
    VerComponent,
    VistasComponent,
    VerSensComponent,
    ActuaSensComponent,
    SenStatusComponent,
    UserStatusComponent,
    GraficasComponent,
    ControlesComponent,
    CrearComponent,
    MostrarComponent,
    LedsComponent,
    GraficaComponent,
    CrearVistaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    SharedModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  entryComponents:[
    ActUserComponent,
    VerComponent,
    ActuaSensComponent,
    UserStatusComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class MainModule { }
