import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageLayoutComponent } from './layouts/mainpage-layout/mainpage-layout.component';

const routes: Routes = [
  {
    path:"",
    component: MainpageLayoutComponent,
    children:[
      
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
