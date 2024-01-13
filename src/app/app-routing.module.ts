import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PagesComponent } from './shared/pages/error404-pages/error404-pages.component';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

//Rutas principales de mi aplicacion
const routes: Routes = [

  {
    path: "auth",
    loadChildren: ()=> import("./auth/auth.module").then( m => m.AuthModule)
  },
  {
    path:"app",
    canActivate: [ isAuthenticatedGuard], //guard que verifica el token que sea valido
    loadChildren: ()=> import("./mainpage/mainpage.module").then(m => m.MainpageModule)
  },
  // {
  //   path: "404",
  //   component: Error404PagesComponent
  // },
  // {
  //   path: "",
  //   redirectTo: "auth",
  //   pathMatch: "full"
  // },
  {
    //cualquier otra ruta que no sean las definidas
    path: "**",
    redirectTo: "auth"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
