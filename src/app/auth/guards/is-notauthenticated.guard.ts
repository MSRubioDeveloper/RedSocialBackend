import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';


export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {


  const authService = inject(AuthService);
  const router = inject(Router);


  if( authService.AuthStatus() === AuthStatus.authenticated){
    router.navigateByUrl("/app/main")
    return false;
  }

  return true;
};
