import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-circle-loader',
  templateUrl: './circle-loader.component.html',
  styleUrl: './circle-loader.component.css'
})
export class CircleLoaderComponent {

  @Input()
  public width: string = "28";
  @Input()
  public heigth: string = "28";
  @Input()
  public stroke: string ="#000000"

}
