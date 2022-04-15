import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent2 } from './main copy/main.component';
import { MainComponent } from './main/main.component';
import { VistasComponent } from './vistas/vistas.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ActuaSensComponent } from './vistas/components/Sens/actua-sens/actua-sens.component';
import { VerSensComponent } from './vistas/components/Sens/ver-sens/ver-sens.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path:'2',
        component:MainComponent2
      },
      {
        path:'vistas',
        component:VistasComponent
      },
      {
        path:'graficas',
        component:GraficasComponent
      },
      {
        path:''
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
