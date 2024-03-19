import { Component, computed, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviwDialogComponent } from '../dialog-overviw-dialog/dialog-overviw-dialog.component';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-add-publication-bar-component',
  templateUrl: './add-publication-bar-component.component.html',
  styleUrl: './add-publication-bar-component.component.css'
})
export class AddPublicationBarComponentComponent {

  
  constructor(public dialog: MatDialog) {}
  private authService = inject( AuthService);

  //forma 1 de getter
  // get user(){
  //   return this.authService.currentUser(); //regresando el valor d ela signal actual del sertvicio
  // }
  //forma 2 de getter 
  public user = computed( ()=> this.authService.currentUser())
  

  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviwDialogComponent,{
      width: "700px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
