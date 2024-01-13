import { Injectable, OnInit, computed, inject, signal } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { AuthStatus, CheckTokenResponse, LoginResponse, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 constructor() { 
    //  this.checkAuthStatus().subscribe()
  }

 

  private setAuthenticationUser(user: User, token: string): boolean{
    this._currentUser.set(user);
    this._authStatus.set( AuthStatus.authenticated)
    localStorage.setItem("token", token)
    return true
  }



  private readonly baseUrl: string = enviroment.baseUrl;
  private http = inject( HttpClient)

  private _currentUser = signal<User| null>(null)
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //cosas publicas, aqui regresas el valor de la señal punlica
  //de esta manera NADIE puede cmabiar el estado de la authenticacion
  public currentUser = computed ( ()=> this._currentUser())
  public AuthStatus = computed ( ()=> this._authStatus())

 
  login( email: string, password: string): Observable<boolean>{
    
    const url = `${ this.baseUrl}/auth/login`;
    const body = { email, password}

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map( ({ user, token}) => {
          return this.setAuthenticationUser(user, token);
        }),         
        catchError( err => throwError( () => "Credenciales invalidas"))
      )

  }

  checkAuthStatus(): Observable<boolean>{
    const url = `${ this.baseUrl}/auth/check-token`;
    const token = localStorage.getItem("token");

    if(!token) return of(false);

    //httpHeaders: objeto que contiene headers de una peticion
    //ene ste caso mandamos el token de authorization para validar al usuario
    const headers = new HttpHeaders()
      .set("Authorization",`Bearer ${token}`)
      
      return this.http.get<CheckTokenResponse>(url, { headers: headers})
        .pipe(
          map( ({ user, token}) => this.setAuthenticationUser(user, token)), 
          //Error, si token es invalido, directamente es error
          catchError( ()=> {
            this._authStatus.set( AuthStatus.notAuthenticated)

           return of(false);
          })
        )
  }
}
