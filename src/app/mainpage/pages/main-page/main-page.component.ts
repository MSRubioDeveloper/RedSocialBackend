import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviwDialogComponent } from '../../components/dialog-overviw-dialog/dialog-overviw-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {


  public authService = inject(AuthService);
  

  public user = computed( ()=> this.authService.currentUser());
 
}
