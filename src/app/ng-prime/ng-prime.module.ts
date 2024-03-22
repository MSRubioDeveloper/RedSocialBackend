import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    AvatarGroupModule,
    AvatarModule,
    SkeletonModule
  ]
})
export class NgPrimeModule { }
