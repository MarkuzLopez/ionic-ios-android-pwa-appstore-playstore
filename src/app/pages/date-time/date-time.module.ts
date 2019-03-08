import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DateTimePage } from './date-time.page';
import { ComponentesModule } from '../../componentes/componentes.module';

const routes: Routes = [
  {
    path: '',
    component: DateTimePage
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
  declarations: [DateTimePage]
})
export class DateTimePageModule {}
