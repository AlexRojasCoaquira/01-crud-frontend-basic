import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'listado',
        component:ListadoComponent
      },
      {
        path:'add',
        component:AddComponent
      },
      {
        path:'detail',
        component:DetailComponent
      },
      {
        path:'**',
        redirectTo:'listado'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
