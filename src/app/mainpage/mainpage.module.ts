import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { PublicacionesPageComponent } from './pages/publicaciones-page/publicaciones-page.component';
import { MaterialModule } from '../material/material.module';
import { MainpageLayoutComponent } from './layouts/mainpage-layout/mainpage-layout.component';


@NgModule({
  declarations: [

    PublicacionesPageComponent,
      MainpageLayoutComponent
  ],
  imports: [
    CommonModule,
    MainpageRoutingModule,

    MaterialModule
  ]
})
export class MainpageModule { }
