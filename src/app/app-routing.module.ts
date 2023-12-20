import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PagesComponent } from './shared/pages/error404-pages/error404-pages.component';

//Rutas principales de mi aplicacion
const routes: Routes = [
  {
    path: "auth",
    loadChildren: ()=> import("./auth/auth.module").then( m => m.AuthModule)
  },
  {
    path: "404",
    component: Error404PagesComponent
  },
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  },
  {
    //cualquier otra ruta que no sean las definidas
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
