import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { enviroment } from '../../../../enviroments/enviroments';
import { AuthService } from '../../../auth/services/auth.service';
import { ImgProfileResponse } from '../../interfaces/profileimg-response.interface';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationServiceService {

  private http = inject( HttpClient )
  private readonly baseUrl: string = enviroment.baseUrl; 
  private authService = inject( AuthService );



  public uploadImageToBackend(file: any){
    const formData = new FormData();
    formData.append("file", file)
    formData.append("idUser", this.authService.currentUser()!._id )
    let headers = new HttpHeaders();
    const token = localStorage.getItem("token") || "";
    headers = headers.append('Authorization', `Bearer ${token}`);
    
  
    //! TODO
     return this.http.post<ImgProfileResponse>(`${ this.baseUrl}/publicaciones/imageProfile`, formData, { headers: headers})
  
  } 
   

}
