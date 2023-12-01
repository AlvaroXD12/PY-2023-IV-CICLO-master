import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarLComponent } from './editar/editar.component';

const routes: Routes = [
  {
    path:'',
    component:EditarLComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarLRoutingModule { }
