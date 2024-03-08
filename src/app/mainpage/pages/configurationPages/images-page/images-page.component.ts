import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ConfigurationServiceService } from '../configuration-service.service';
import { enviroment } from '../../../../../enviroments/enviroments';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrl: './images-page.component.css'
})
export class ImagesPageComponent {
  
  private http = inject( HttpClient )
  private readonly baseUrl: string = enviroment.baseUrl;

  constructor( private configService: ConfigurationServiceService){}

  @ViewChild("fileInput") fileInput!: ElementRef;

  async uploadImage(){
      const fileInput: HTMLInputElement = this.fileInput.nativeElement;
      const file: File = fileInput.files![0]
      console.log(file)
       const formData = new FormData();
       formData.append("file", file)
  
      // console.log(formData.get("file"))
  
        // const res = await this.configService.uploadImageToBackend( FormData );
        // console.log(res)
        

        //mandar image al backend
        const url = `${ this.baseUrl}/files`
  
      const resp = await fetch( url, {
        method: "POST",
        headers: {

        },
        body: formData
      })

      console.log( await resp.json())

  } 
}
