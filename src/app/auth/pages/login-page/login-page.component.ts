import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as customValidators from "../../validators/validators"
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
    ){

    
  }

  public propiedadesErrorInput: any;

  public myForm: FormGroup = this.fb.group({
    email: ["msilvarubios3@hotmail.com", [Validators.required, Validators.pattern( customValidators.emailPattern)]],
    password: ["miso7400", [Validators.required]]
  })

  isValidField( field: string): boolean | null{
    return this.myForm.controls[field].errors && 
    this.myForm.controls[field].touched;
  }

  getFieldError( field:string ): string | null{
    if( !this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {}

    for(const key of Object.keys(errors)){
     switch( key ){
       case "required":
         return "Este campo es requerido";

       case "minlength":
         return `Minimo de ${ errors["minlength"].requiredLength } caracteres`;
     }
    }

    return ""
 }

  login(){
    if( this.myForm.invalid ){
      this.toastr.error("Login fallido, ingresa un email valido y una contraseña")
      this.myForm.markAllAsTouched();
      this.propiedadesErrorInput = { border: '2px solid red'}
      return
    }
    this.propiedadesErrorInput  = {};

    const { email, password} = this.myForm.value;

    console.log({email, password})
    this.authService.login(email, password)
      .subscribe({
        next: ()=> this.router.navigateByUrl("/app"), //todo sale bn
        error: (error) => { //si service trae error
          this.toastr.error( error)
        }
      })
  }




}
