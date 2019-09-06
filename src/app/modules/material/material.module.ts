import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const materialModules: any[] = [
  MatBadgeModule,
  MatCardModule,
  MatIconModule
];
const cdkModules: any[] = [];

@NgModule({
  imports: [
    CommonModule,

    materialModules,
    cdkModules
  ],
  exports: [
    materialModules,
    cdkModules
  ]
})
export class MaterialModule { }
