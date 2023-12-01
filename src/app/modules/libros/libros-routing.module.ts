import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path:'',
    component:ListarLComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
