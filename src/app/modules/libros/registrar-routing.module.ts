import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarLComponent } from './registrar/registrar.component';

const routes: Routes = [
  {
    path:'',
    component:RegistrarLComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarLRoutingModule { }
