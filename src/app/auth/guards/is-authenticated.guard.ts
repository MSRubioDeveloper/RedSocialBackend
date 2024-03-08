import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';


export const isAuthenticatedGuard: CanActivateFn = (route, state) => {


  const authService = inject(AuthService);
  const router = inject(Router);


  // console.log("is authenticated guard")
  // console.log({ status: authService.AuthStatus()})
  // console.log({route, state})

  if( authService.AuthStatus() === AuthStatus.authenticated){
    return true;
  }

  // if( authService.AuthStatus() === AuthStatus.checking){
  //   return false;
  // }

  // const url = state.url;
  // localStorage.setItem("url", url)
  router.navigateByUrl("auth/login")


  return false;
};
