import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PublicacionesPageComponent } from './pages/publicaciones-page/publicaciones-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    PublicacionesPageComponent
  ],
  imports: [
    CommonModule,
    MainpageRoutingModule,

    MaterialModule
  ]
})
export class MainpageModule { }
