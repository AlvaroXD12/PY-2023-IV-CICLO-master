import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';

import { MatButtonModule } from '@angular/material/button';
import { RegistrarLComponent } from './registrar/registrar.component';
import { RegistrarLRoutingModule } from './registrar-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrarLComponent,
  ],
  imports: [
    CommonModule,
    RegistrarLRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatButtonModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrarLModule { }
