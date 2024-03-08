import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration-layout',
  templateUrl: './configuration-layout.component.html',
  styleUrl: './configuration-layout.component.css'
})
export class ConfigurationLayoutComponent {
  listOptions = [
    { icon:"person_2", description: "Imagen de perfil", url: "/app/configurations/image" }
  ]
}
