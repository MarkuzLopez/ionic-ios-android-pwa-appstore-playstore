import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridPage } from './grid.page';
import { ComponentesModule } from '../../componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: GridPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [GridPage]
})
export class GridPageModule {}
