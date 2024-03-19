import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../../../enviroments/enviroments';
import { AuthService } from '../../../auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationServiceService {

  private http = inject( HttpClient )
  private readonly baseUrl: string = enviroment.baseUrl; 
  private authService = inject( AuthService );


  public uploadImageToBackend(file: any){
    //mandar image al backend
    console.log(file)

    const formData = new FormData();
    formData.append("file", file)
    formData.append("idUser", this.authService.currentUser()!._id )
    let headers = new HttpHeaders();
    const token = localStorage.getItem("token") || "";
    headers = headers.append('Authorization', `Bearer ${token}`);
    
  
    //! TODO
     this.http.post(`${ this.baseUrl}/publicaciones/imageProfile`, formData, { headers: headers})
     .subscribe( res =>{
        console.log(res)
     })
  } 
   

}
