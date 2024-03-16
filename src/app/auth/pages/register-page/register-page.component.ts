import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from "../../validators/validators"
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  public propiedadesErrorInput: any;


  constructor( 
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
    ){}

  public myRegisterForm: FormGroup = this.fb.group({
    name: ["", [Validators.required]] ,
    email: ["", [Validators.required, Validators.pattern( customValidators.emailPattern)]],
    password: ["", [Validators.required]]
  })



  public register(){
    this.propiedadesErrorInput  = {};

    const { name, email, password} = this.myRegisterForm.value;

    console.log({email, password})
    this.authService.register(name, email, password)
      .subscribe({
        next: ()=> this.toastr.info("Exito! revisa tu correo y verifica tu cuenta"), //todo sale bn
        error: (error) => { //si service trae error
          if( error.includes("ya existe") ){
            return this.toastr.error( "una cuenta con este correo ya existe" )
          }
          this.propiedadesErrorInput = {'border': '2px solid red'}
          return this.toastr.error( "Correo inexistente, verifica tu informacion" )
        }
      })
  }
}
