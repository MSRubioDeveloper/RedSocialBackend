import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  public sidebarItems = [
    {label: "perfil", icon:"person", url:"./perfil"},
    {label: "???", icon:"psychology_alt", url:"./random"},
  ]
}
