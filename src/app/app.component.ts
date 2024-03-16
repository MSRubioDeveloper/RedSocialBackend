import { Component,  computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//toda aplicacion de angular pasa en todo momento 
//por este archivo, aqui pueden ir las authentications
export class AppComponent {
  constructor(){

  }
    
  private authService = inject(AuthService);
  private router = inject(Router)

  public finishedChecking = computed<boolean>( ()=> {
    
    if ( this.authService.AuthStatus() === AuthStatus.checking){
      return false
    }
    
    return true;

  });


  public authStatusChangedEffect = effect( ()=>{

      switch(this.authService.AuthStatus() ){
        case AuthStatus.checking:
          return;
        case AuthStatus.authenticated:
    
          return;
        
        case AuthStatus.notAuthenticated:
          this.router.navigateByUrl("/auth/login");
          return;
      }
  })

}
