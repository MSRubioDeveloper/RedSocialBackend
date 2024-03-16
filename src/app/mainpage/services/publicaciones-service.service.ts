import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroments';
import { AuthService } from '../../auth/services/auth.service';
import { GetActualDate } from '../helpers/getActualDate.helper';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService{

  private baseUrl: string = enviroment.baseUrl;
  public publicaciones = signal<any>("");

  // public publicacionesComputed = computed( ()=> this.publicaciones() )


  //User
  public authService = inject(AuthService);
  get curretUser(){
    return this.authService.currentUser()
  }

  constructor(
    private http: HttpClient
  ) { 

    console.log(this.curretUser)
  }


  public addPublication( file: any , text: string){

    if ( !file) {
      file = "";
    }
    const formData = new FormData()
    formData.append("file", file );
    formData.append("name", this.curretUser!.name);
    formData.append("text", text);
    formData.append("email", this.curretUser!.email);
    formData.append("isActive", this.curretUser!.isActive.toString() );
    formData.append("roles", this.curretUser!.roles[0] );
    formData.append("imgPerfil", this.curretUser!.imgPerfil );
    formData.append("publication_date", GetActualDate.Format())


     this.http.post(`${ this.baseUrl}/publicaciones/add`, formData)
          .subscribe( pub=> {
            console.log( pub )
            this.publicaciones.update( values => {
                return [pub, ...values ]
            } );

            // this.http.get(`${ this.baseUrl}/publicaciones/${ pub.imageUuid +"."+ pub.imgFileExtension}`)
            //     .subscribe( resp => console.log( resp))

            console.log( this.publicaciones() )
          })


     return { "exito":" publicacion creada"}
            
  }


  public getAllPublications(){
    const url = `${ this.baseUrl}/publicaciones/getAll`;

    return this.http.get<any[]>(url)
    .subscribe( allPublicaciones =>{
      this.publicaciones.set( allPublicaciones.reverse());
    })
  }
}
