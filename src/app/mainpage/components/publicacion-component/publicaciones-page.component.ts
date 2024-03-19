import { AfterViewInit, Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones-service.service';
import { GetActualDate } from '../../helpers/getActualDate.helper';


@Component({
  selector: 'app-publicaciones-page',
  templateUrl: './publicaciones-page.component.html',
  styleUrl: './publicaciones-page.component.css'
})
export class PublicacionesPageComponent{
  



  // //TODO mueve esta signal al servicio
     public iconColor = "black";
    private publicacionesService = inject( PublicacionesService)
  
    public allPublicaciones  = computed( ()=> this.publicaciones );
    public allLikes = computed( ()=> this.likes)

    constructor(){
      //Llamas a los likes y pubc, esto lo carga
     this.getAllPublicaciones() 
  
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

    //likes por Publicacion, mandar todo 
    //el array y devolver los likes de esta Pagina
    get totalLikesPub(){
      return this.publicacionesService.likesCountsWithId
    }


    //Colors
    like( pubId: string, event: MouseEvent ){
      const button = event.currentTarget as HTMLButtonElement;
      const computedColor = window.getComputedStyle(button).color;
      console.log( computedColor)
      if( computedColor === "rgb(0, 0, 0)" || computedColor === "black"){

          //TODO comunicarse para dar like
        this.publicacionesService.likesCountsWithId.update( values =>{
        const filtredLike = values.filter( obj => obj.publicacionID == pubId);
          filtredLike[0].likes = filtredLike[0].likes + 1

          return [ ...values, filtredLike]
        })
         
        button.style.color = 'red';
        return this.publicacionesService.like( pubId );
      
      }else{
        //TODO comunicarse para quitar like

        this.publicacionesService.likesCountsWithId.update( values =>{
          const filtredLike = values.filter( obj => obj.publicacionID == pubId);
            filtredLike[0].likes = filtredLike[0].likes -1
      
            return [ ...values, filtredLike]
          })

        button.style.color = 'black';
        return this.publicacionesService.like( pubId );
      }

    }
 


  

    public publicFormatDate( fecha: string){
      return GetActualDate.Format( fecha);
    }

   

}
