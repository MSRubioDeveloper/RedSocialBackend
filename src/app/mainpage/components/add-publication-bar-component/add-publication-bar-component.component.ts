import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviwDialogComponent } from '../dialog-overviw-dialog/dialog-overviw-dialog.component';

@Component({
  selector: 'app-add-publication-bar-component',
  templateUrl: './add-publication-bar-component.component.html',
  styleUrl: './add-publication-bar-component.component.css'
})
export class AddPublicationBarComponentComponent {

  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviwDialogComponent,{
      width: "700px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
