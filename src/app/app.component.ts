import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './auth/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//toda aplicacion de angular pasa en todo momento 
//por este archivo, aqui pueden ir las authentications
export class AppComponent {
    
  private authService = inject(AuthService);

  public finishedChecking = computed<boolean>( ()=> {
    
    if ( this.authService.AuthStatus() === AuthStatus.checking){
      return false
    }

    return true;

  });


  public authStatusChangedEffect = effect( ()=>{
      console.log("hola")
      console.log("authStatus", this.authService.AuthStatus())
  })
}
