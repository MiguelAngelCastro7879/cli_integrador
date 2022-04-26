import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent2 } from './main copy/main.component';
import { MainComponent } from './main/main.component';
import { VistasComponent } from './vistas/vistas.component';
import { VerSensComponent } from './vistas/components/Sens/ver-sens/ver-sens.component';
import { ControlesComponent } from './controles/controles.component';
import { MostrarComponent } from './vistas/components/Mongo/mostrar/mostrar.component';
import { LedsComponent } from './vistas/components/Mongo/leds/leds.component';
import { GraficaComponent } from './vistas/components/Mongo/grafica/grafica.component';
import { AdminCarrosComponent } from './Admin/admin-carros/admin-carros.component';
import { AuthGuardGuard } from '../shared/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path:'2',
        component:MainComponent2,
        canActivateChild:[AuthGuardGuard]
      },
      {
        path:'vistas',
        component:VistasComponent,
        canActivateChild:[AuthGuardGuard]
      },
      {
        path:'sensores',
        component:VerSensComponent,
        canActivateChild:[AuthGuardGuard]
      },
      {
        path:'controles/:id',
        component:ControlesComponent,
        canActivateChild:[AuthGuardGuard]
      },
      {
        path:'mongo',
        component:MostrarComponent,
        canActivateChild:[AuthGuardGuard]
      },
      {
        path:'leds/:id',
        component:LedsComponent,
        canActivateChild:[AuthGuardGuard]
      },
      {
        path:'grafica/:id',
        component:GraficaComponent,
      },
      {
        path:'adminCars',
        component:AdminCarrosComponent,
        canActivateChild:[AuthGuardGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
