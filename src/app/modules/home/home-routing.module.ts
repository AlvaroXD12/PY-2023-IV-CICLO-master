import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from '../alquiler/editar/editar.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'alquiler',
        loadChildren: () => import('../alquiler/alquiler.module').then(m => m.AlquilerModule)
      },
      {
        path: 'alquiler/agregar',
        loadChildren: () => import('../alquiler/registrar.module').then(m => m.RegistrarModule)
      },
      {
        path: 'alquiler/editar/:id',
        loadChildren: () => import('../alquiler/editar.module').then(m => m.EditarModule)
      },
      {
        path: 'libro',
        loadChildren: () => import('../libros/libros.module').then(m => m.LibroModule)
      },
      {
        path: 'libro/registrar',
        loadChildren: () => import('../libros/registrar.module').then(m => m.RegistrarLModule)
      },
      {
        path: 'libro/editar/:id',
        loadChildren: () => import('../libros/editar.module').then(m => m.EditarLModule)
      },
      {
        path: '**',
        redirectTo: 'alquiler'
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
