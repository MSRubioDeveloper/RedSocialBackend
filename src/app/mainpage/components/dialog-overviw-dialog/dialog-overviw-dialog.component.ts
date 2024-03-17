import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { IconOptionsInterface } from '../../interfaces/iconsOptions.interface';
import { PublicacionesService } from '../../services/publicaciones-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dialog-overviw-dialog',
  templateUrl: './dialog-overviw-dialog.component.html',
  styleUrl: './dialog-overviw-dialog.component.css'
})
export class DialogOverviwDialogComponent {
  
  //DI
  private readonly authService = inject( AuthService);
  private readonly publicacionesServcie = inject( PublicacionesService)



  public user = computed( ()=> this.authService.currentUser())
  public file?: any  ="";

  public addOptions = signal<IconOptionsInterface[]>([
    { icon: "image",color:"green"  },
    // { icon: "location_on", color:"red" },
  ]);


  addFileToPub(event: any){
    const file: File = event.target.files[0];

    this.file = file
    console.log(file); 
  }

  addPub(text: string  ){
        const currentfile = this.file ;

        this.publicacionesServcie.addPublication( currentfile, text )
       
        return;
    
   
      
  }

}
