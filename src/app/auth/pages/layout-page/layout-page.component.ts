import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthStatus } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: "./layout-component.css"
})
export class LayoutPageComponent implements OnInit{

  private authSrrvice = inject(AuthService) 
  private router = inject(Router) 

  ngOnInit(): void {
    if( this.authSrrvice.AuthStatus() === AuthStatus.authenticated ){
        this.router.navigateByUrl("/app")
    }
  }
}
