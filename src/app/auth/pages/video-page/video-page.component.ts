import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.css'
})
export class VideoPageComponent {
  title = 'red-social';
  @ViewChild("videoBG") videoPlayerRef!: ElementRef;

  public btn: string = 'volume_off'

  public muted: boolean = false;


  ngAfterViewInit() {
    // Establecer el volumen por defecto a 0.5 (50%)
    if (this.videoPlayerRef) {
      this.videoPlayerRef.nativeElement.muted = true;
      this.videoPlayerRef.nativeElement.volume = 0.2;
      this.videoPlayerRef.nativeElement.play();

      this.videoPlayerRef.nativeElement.oncanplay = () =>{
         // Establecer autoplay a true para reproducir automáticamente
         this.videoPlayerRef.nativeElement.autoplay = true;
         // Iniciar la reproducción del video
         this.videoPlayerRef.nativeElement.play();
      }

    }
  }



  public activarMusica():void{
    if(this.btn == 'volume_off'){
      this.btn = "volume_up";
      this.videoPlayerRef.nativeElement.currentTime = 0;
      this.videoPlayerRef.nativeElement.muted = false;

    }else{
      this.btn = 'volume_off'
      this.videoPlayerRef.nativeElement.muted = true;

    }
  }
}
