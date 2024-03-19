import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Pipe({
  name: 'imgProfilePipe'
})
export class ImgProfilePipePipe implements PipeTransform {

  constructor(
    private readonly authService: AuthService
  ){}

  transform(value: string | undefined): string {
    
    if( !value || value == undefined ) return "../../../../assets/images/defaultImagePerfil.jpg"
    
    return this.authService.currentUser()!.imgPerfil
  }

}
