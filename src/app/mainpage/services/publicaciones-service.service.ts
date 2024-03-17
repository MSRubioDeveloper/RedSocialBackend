import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroments';
import { AuthService } from '../../auth/services/auth.service';
import { PublicacionResponse } from '../interfaces/publicaciones.interface';
import { AllLikes } from '../interfaces/alllikes-reponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService{

  private baseUrl: string = enviroment.baseUrl;
  public publicaciones = signal<PublicacionResponse[] >([]);
  public liked = signal<boolean>(false);
  public allLikes = signal<AllLikes[]>([]);

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
    formData.append("userId", this.curretUser!._id);
    formData.append("text", text);

    let headers = new HttpHeaders();
    const token = localStorage.getItem("token") || "";
    headers = headers.append('Authorization', `Bearer ${token}`);


     this.http.post<PublicacionResponse[]>(`${ this.baseUrl}/publicaciones/add`, formData, { headers: headers})
          .subscribe( publicaciones => {
            this.publicaciones.set( publicaciones.reverse() )

            const pubId = this.publicaciones().map( pub => pub.publicacion._id);
            this.getAllLikes();
          })


     return { "exito":" publicacion creada"}
            
  }


  public getAllPublications(){
    const url = `${ this.baseUrl}/publicaciones/getAll`;
    
    let headers = new HttpHeaders();
    const token = localStorage.getItem("token") || "";
    headers = headers.append('Authorization', `Bearer ${token}`);


    return this.http.get<any[]>(url, { headers})
    .subscribe( allPublicaciones =>{
      this.publicaciones.set( allPublicaciones.reverse());

       this.getAllLikes();
      
     
    })
  }


  public like( pubId: string ){
    this.http.get<boolean>(`${this.baseUrl}/publicaciones/like/${pubId}`)
      .subscribe( booleanLiked =>{
        this.liked.set( booleanLiked )
        console.log( this.liked())
      })
  }

  public getAllLikes(){
    const url = `${ this.baseUrl}/publicaciones/getAllLikes`;
    
    let headers = new HttpHeaders();
    const token = localStorage.getItem("token") || "";
    headers = headers.append('Authorization', `Bearer ${token}`);

    const idPublicaciones = this.publicaciones().map( pub =>{
      return pub.publicacion._id
    }) 

    const arrayId =  {
      idPublicaciones: JSON.stringify(idPublicaciones)
    }

    

     this.http.post<any>(url, arrayId ,{ headers})
      .subscribe( likesResponse =>{
        console.log( likesResponse)
        this.allLikes.set( likesResponse )


      })
  }


  // pintarLikesAlIniciar( id: string )

}
