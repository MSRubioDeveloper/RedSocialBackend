import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dialog-overviw-dialog',
  templateUrl: './dialog-overviw-dialog.component.html',
  styleUrl: './dialog-overviw-dialog.component.css'
})
export class DialogOverviwDialogComponent {
  

  public authService = inject( AuthService)

  public user = computed( ()=> this.authService.currentUser())


  public addOptions = signal([
    { icon: "image",color:"green"  },
    { icon: "location_on", color:"red" },

  ])
}
