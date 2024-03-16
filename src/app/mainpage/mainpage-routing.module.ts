import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageLayoutComponent } from './layouts/mainpage-layout/mainpage-layout.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { RandomPageComponent } from './pages/random-page/random-page.component';
import { ImagesPageComponent } from './pages/configurationPages/images-page/images-page.component';
import { ConfigurationLayoutComponent } from './pages/configurationPages/configuration-layout/configuration-layout.component';

const routes: Routes = [
  {
    path:"",
    component: MainpageLayoutComponent,
    children:[
      { path: "main", component: MainPageComponent},
      { path: "perfil", component: PerfilPageComponent},
      { path: "random", component: RandomPageComponent},
      { path: "configurations", component: ConfigurationLayoutComponent},
      //PAGINAS DE CONFIGURACIONES
      { path: "configurations/image" , component: ImagesPageComponent},
      { path: "**", redirectTo: "main"}
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
