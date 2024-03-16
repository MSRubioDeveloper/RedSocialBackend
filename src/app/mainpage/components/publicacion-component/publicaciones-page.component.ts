import { Component, computed, inject, signal } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones-service.service';


@Component({
  selector: 'app-publicaciones-page',
  templateUrl: './publicaciones-page.component.html',
  styleUrl: './publicaciones-page.component.css'
})
export class PublicacionesPageComponent {

    public iconColor = signal("black");
    private publicacionesService = inject( PublicacionesService)
  
    public allPublicaciones  = computed( ()=> this.publicaciones );

    constructor(){
      console.log( this.getAllPublicaciones() )
    }
  

    get publicaciones(){
      return this.publicacionesService.publicaciones;
    }

    public getAllPublicaciones(){  
      return this.publicacionesService.getAllPublications();
    }

    //Colors
    like(){
      if( this.iconColor() == "black"){
        this.iconColor.set("red")
      }else{
        this.iconColor.set("black")
      }

    }
}
