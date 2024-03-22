import { Component } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones-service.service';

@Component({
  selector: 'app-skeleton-publication',
  templateUrl: './skeleton-publication.component.html',
  styleUrl: './skeleton-publication.component.css'
})
export class SkeletonPublicationComponent {

  public iterations = [1,2,3];

  constructor(
    private publicacionesService: PublicacionesService
  ){}

  get loadingG(){
    return this.publicacionesService.loading;
  }


}
