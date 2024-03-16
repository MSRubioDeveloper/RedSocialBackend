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
    email: ["", [Validators.required, Validators.pattern( customValidators.emailPattern)]],
    password: ["", [Validators.required]]
  })

//   isValidField( field: string): boolean | null{
//     return this.myForm.controls[field].errors && 
//     this.myForm.controls[field].touched;
//   }

//   getFieldError( field:string ): string | null{
//     if( !this.myForm.controls[field]) return null;

//     const errors = this.myForm.controls[field].errors || {}

//     for(const key of Object.keys(errors)){
//      switch( key ){
//        case "required":
//          return "Este campo es requerido";

//        case "minlength":
//          return `Minimo de ${ errors["minlength"].requiredLength } caracteres`;
//      }
//     }

//     return ""
//  }

  login(){
   
    this.propiedadesErrorInput  = {};

    const { email, password} = this.myForm.value;

    console.log({email, password})
    this.authService.login(email, password)
      .subscribe({
        next: ()=> this.router.navigateByUrl("/app"), //todo sale bn
        error: (error) => { //si service trae error
          this.propiedadesErrorInput = {'border': '2px solid red'}
          if( error === "Cuenta No validada, revisa tu correo electronico"){
            return this.toastr.info(error)
          }
          return this.toastr.error( error )
        }
      })
  }




}
