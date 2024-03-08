import { NgModule } from '@angular/core';
import { Error404PagesComponent } from './pages/error404-pages/error404-pages.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './pages/sidebar/sidebar.component';



@NgModule({
  declarations: [
    Error404PagesComponent,
    SidebarComponent,
    SideNavComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports:[
    Error404PagesComponent, //exportas a otros modulos,
    SidebarComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
