import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MainComponent2 } from './main copy/main.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule }from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VistasComponent } from './vistas/vistas.component';
import { GraficasComponent } from './graficas/graficas.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule }from '@angular/material/list';
import {MatGridListModule}from '@angular/material/grid-list';
import { ActUserComponent } from './vistas/components/act-user/act-user.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VerComponent } from './vistas/components/ver/ver.component';
import { ActuaSensComponent } from './vistas/components/Sens/actua-sens/actua-sens.component';
import { VerSensComponent } from './vistas/components/Sens/ver-sens/ver-sens.component';
import { SenStatusComponent } from './vistas/components/Sens/sen-status/sen-status.component';
import { UserStatusComponent } from './vistas/components/user-status/user-status.component';

@NgModule({
  declarations: [
    MainComponent,
    MainComponent2,
    VistasComponent,
    GraficasComponent,
    ActUserComponent,
    VerComponent,
    VerSensComponent,
    ActuaSensComponent,
    SenStatusComponent,
    UserStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    SharedModule,
    MatTooltipModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  entryComponents:[
    ActUserComponent,
    VerComponent,
    ActuaSensComponent,
    UserStatusComponent
  ]
})
export class MainModule { }
