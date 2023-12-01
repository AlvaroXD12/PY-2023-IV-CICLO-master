import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlquilerRoutingModule } from './alquiler-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { ListarComponent } from './listar/listar.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ListarComponent,
  ],
  imports: [
    CommonModule,
    AlquilerRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatButtonModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AlquilerModule { }
