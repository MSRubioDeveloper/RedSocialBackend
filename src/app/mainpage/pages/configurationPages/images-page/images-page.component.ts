import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ConfigurationServiceService } from '../configuration-service.service';
import { enviroment } from '../../../../../enviroments/enviroments';
import { MatDialog } from '@angular/material/dialog';
import { MATDialogUploadProfileImgComponent } from '../../../components/matdialog-upload-profile-img/matdialog-upload-profile-img.component';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrl: './images-page.component.css'
})
export class ImagesPageComponent {
  
  private http = inject( HttpClient )
  private readonly baseUrl: string = enviroment.baseUrl;
  public imgSrc: any = "../../../../../assets/images/defaultImagePerfil.jpg";
  public inputHasAnImage: boolean = false;
  public textoLabel: string = "Elige un archivo....";
  public loadingImg = false;

  constructor( 
    private configService: ConfigurationServiceService,
    public dialog: MatDialog,
    private authService : AuthService
    ){}

  @ViewChild("fileInput") fileInput!: ElementRef;


  

  public readURL( event: any){

    this.inputHasAnImage = false;
    this.loadingImg = true;
    if ( event.target && event.target.files && event.target.files[0]) {
      console.log( { event})
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imgSrc = reader.result;

      reader.readAsDataURL(file);
      this.textoLabel = "Archivo cargado!"
      this.loadingImg = false;
      this.inputHasAnImage = true;
    }else{
      this.imgSrc= "../../../../../assets/images/defaultImagePerfil.jpg"
      this.textoLabel = "Elige un archivo....";
      this.loadingImg = false;
      this.inputHasAnImage = false;
    }
  }



  //Mat dialog
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    if( !this.inputHasAnImage){
      console.error("Es necesario una imagen, ERROR");
      return;
    }
    const dialogRef = this.dialog.open(MATDialogUploadProfileImgComponent,{
      width: "500px",
      height: "370px",
      enterAnimationDuration,
      exitAnimationDuration
    });

    dialogRef.componentInstance.imgSrc = this.imgSrc;
    //mandando File
    const fileInput: HTMLInputElement = this.fileInput.nativeElement;
    const file: File = fileInput.files![0]
    dialogRef.componentInstance.file = file;


    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
