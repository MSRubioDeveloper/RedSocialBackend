import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { PublicacionesPageComponent } from './pages/publicaciones-page/publicaciones-page.component';
import { MaterialModule } from '../material/material.module';
import { MainpageLayoutComponent } from './layouts/mainpage-layout/mainpage-layout.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { RandomPageComponent } from './pages/random-page/random-page.component';
import { DialogOverviwDialogComponent } from './components/dialog-overviw-dialog/dialog-overviw-dialog.component';

import { ImagesPageComponent } from './pages/configurationPages/images-page/images-page.component';
import { ConfigurationLayoutComponent } from './pages/configurationPages/configuration-layout/configuration-layout.component';





@NgModule({
  declarations: [

    PublicacionesPageComponent,
      MainpageLayoutComponent,
      MainPageComponent,
      PerfilPageComponent,
      RandomPageComponent,
      DialogOverviwDialogComponent,
      ImagesPageComponent,
      ConfigurationLayoutComponent,



  ],
  imports: [
    CommonModule,
    MainpageRoutingModule,

    SharedModule,
    MaterialModule,
    NgPrimeModule
  ]
})
export class MainpageModule { }
