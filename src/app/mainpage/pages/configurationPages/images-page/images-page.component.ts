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
  public imgSrc: any = "";

  constructor( private configService: ConfigurationServiceService){}

  @ViewChild("fileInput") fileInput!: ElementRef;

  async uploadImage(){
      const fileInput: HTMLInputElement = this.fileInput.nativeElement;
      const file: File = fileInput.files![0]
        
       this.configService.uploadImageToBackend( file )
     
    }
  

  public readURL( event: any){
    if ( event.target && event.target.files && event.target.files[0]) {
      console.log( { event})
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imgSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }
}
