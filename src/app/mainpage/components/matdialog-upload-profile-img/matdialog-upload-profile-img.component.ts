import { Component } from '@angular/core';
import { ConfigurationServiceService } from '../../pages/configurationPages/configuration-service.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Status } from '../../helpers/status.enum';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';






@Component({
  selector: 'app-matdialog-upload-profile-img',
  templateUrl: './matdialog-upload-profile-img.component.html',
  styleUrl: './matdialog-upload-profile-img.component.css'
})
export class MATDialogUploadProfileImgComponent {
  

  public imgSrc?: string;
  public file?: File;

  public loader: boolean = false;
  public status: Status = Status.nothing;
  

  constructor(
    private configService: ConfigurationServiceService,
    private authService: AuthService,

    public dialogRef: MatDialogRef<MATDialogUploadProfileImgComponent>,

    private toastr: ToastrService,

    private router: Router
  ){}

  async uploadImage(){
      this.loader = true;
      this.status = Status.inProcess;
     this.configService.uploadImageToBackend( this.file )
      .subscribe( profileImage =>{
      this.authService.currentUser()!.imgPerfil = profileImage.img_url


        this.loader = false;
        this.status = Status.finished;
        this.dialogRef.close();

        this.toastr.success("Imagen de perfil actualziada correctamente!","SUCCES",{
          timeOut: 2000,
          positionClass: "toast-bottom-rigth"
        });

        setTimeout(()=>{
          this.router.navigate(["/app/main"])
        },1500)
       })
  }
}
