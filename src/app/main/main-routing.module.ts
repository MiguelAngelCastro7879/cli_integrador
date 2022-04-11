import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent2 } from './main copy/main.component';
import { MainComponent } from './main/main.component';
import { VistasComponent } from './vistas/vistas.component';
import { GraficasComponent } from './graficas/graficas.component';
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
