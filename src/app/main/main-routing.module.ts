import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent2 } from './main copy/main.component';
import { MainComponent } from './main/main.component';
import { VistasComponent } from './vistas/vistas.component';
import { VerSensComponent } from './vistas/components/Sens/ver-sens/ver-sens.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ControlesComponent } from './controles/controles.component';
import { MostrarComponent } from './vistas/components/Mongo/mostrar/mostrar.component';
import { LedsComponent } from './vistas/components/Mongo/leds/leds.component';
import { GraficaComponent } from './vistas/components/Mongo/grafica/grafica.component';

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
        path:'sensores',
        component:VerSensComponent
      },
      {
        path:'graficas',
        component:GraficasComponent
      },
      {
        path:'controles/:id',
        component:ControlesComponent
      },
      {
        path:'mongo',
        component:MostrarComponent,
      },
      {
        path:'leds/:id',
        component:LedsComponent,
      },
      {
        path:'grafica/:id',
        component:GraficaComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
