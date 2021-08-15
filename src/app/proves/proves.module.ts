import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { ProvaComponent } from './prova/prova.component';



@NgModule({
  declarations: [
    ProvaComponent,
    ContadorComponent
  ],
  exports: [
    ProvaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProvesModule { }
