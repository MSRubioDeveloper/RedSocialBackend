import { NgModule } from '@angular/core';
import { Error404PagesComponent } from './pages/error404-pages/error404-pages.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';



@NgModule({
  declarations: [
    Error404PagesComponent,
    SidebarComponent
  ],
  imports: [

  ],
  exports:[
    Error404PagesComponent, //exportas a otros modulos,
    SidebarComponent
  ]
})
export class SharedModule { }
