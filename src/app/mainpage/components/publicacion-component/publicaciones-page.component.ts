import { AfterViewInit, Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones-service.service';
import { GetActualDate } from '../../helpers/getActualDate.helper';


@Component({
  selector: 'app-publicaciones-page',
  templateUrl: './publicaciones-page.component.html',
  styleUrl: './publicaciones-page.component.css'
})
export class PublicacionesPageComponent implements OnInit{
  



  // //TODO mueve esta signal al servicio
     public iconColor = "black";
    private publicacionesService = inject( PublicacionesService)
  
    public allPublicaciones  = computed( ()=> this.publicaciones );
    public allLikes = computed( ()=> this.likes)

    constructor(){
      //Llamas a los likes y pubc, esto lo carga
     this.getAllPublicaciones() 
  
    }
  ngOnInit(): void {
    //Pintar los likes
    // if (this.publicacionesService.allLikes().includes())
  }
  isLiked(pubId: string): boolean {
    // Suponiendo que publicacionesConLikeIds es un array en tu servicio que contiene los IDs de las publicaciones con likes
    return this.publicacionesService.allLikes().some(pub => pub.idPub === pubId);
  }

    get publicaciones(){
      return this.publicacionesService.publicaciones;
    }

    public getAllPublicaciones(){  
      return this.publicacionesService.getAllPublications();
    }

    //Likes
    get likes(){
      return this.publicacionesService.allLikes;
    }

    public getLikesPublicaciones(){
      return this.publicacionesService.getAllLikes();
    }


    //Colors
    like( pubId: string, event: MouseEvent ){
      const button = event.currentTarget as HTMLButtonElement;
      const computedColor = window.getComputedStyle(button).color;
      console.log( computedColor)
      if( computedColor === "rgb(0, 0, 0)" || computedColor === "black"){

          //TODO comunicarse para dar like
        button.style.color = 'red';
        return this.publicacionesService.like( pubId );
      
      }else{
        //TODO comunicarse para quitar like
        button.style.color = 'black';
        return this.publicacionesService.like( pubId );
      }

    }
 


  

    public publicFormatDate( fecha: string){
      return GetActualDate.Format( fecha);
    }

   

}
