import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { enviroment } from '../../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationServiceService {

  private http = inject( HttpClient )
 private readonly baseUrl: string = enviroment.baseUrl; 

  public uploadImageToBackend(file: any){
    //mandar image al backend
    
    const imagen = {
      "file": file.get("file")
    }
    console.log(imagen)
     this.http.post(`${ this.baseUrl}/files`, imagen)
     .subscribe( res =>{
        console.log(res)
     })
  } 
}
