//Modulo para importar ye xportar componentes de Angular material
import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from "@angular/material/dialog"


@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule
    
  ]
})
export class MaterialModule { }
