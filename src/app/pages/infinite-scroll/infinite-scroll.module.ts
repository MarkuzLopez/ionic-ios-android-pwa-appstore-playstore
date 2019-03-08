import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfiniteScrollPage } from './infinite-scroll.page';
import { ComponentesModule } from '../../componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: InfiniteScrollPage
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
  declarations: [InfiniteScrollPage]
})
export class InfiniteScrollPageModule {}
