import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MaterialModule } from '../material/material.module';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    VideoPageComponent,


  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    NgPrimeModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ]
})
export class AuthModule { }
