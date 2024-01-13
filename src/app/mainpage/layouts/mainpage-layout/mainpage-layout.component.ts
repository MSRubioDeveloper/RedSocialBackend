import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-mainpage-layout',
  templateUrl: './mainpage-layout.component.html',
  styleUrl: './mainpage-layout.component.css'
})
export class MainpageLayoutComponent {

  private authService = inject( AuthService);

  //forma 1 de getter
  // get user(){
  //   return this.authService.currentUser(); //regresando el valor d ela signal actual del sertvicio
  // }
  //forma 2 de getter 
  public user = computed( ()=> this.authService.currentUser())
}
