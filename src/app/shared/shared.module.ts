import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../core/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule
  ],

  exports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule
  ],
})
export class SharedModule { }
