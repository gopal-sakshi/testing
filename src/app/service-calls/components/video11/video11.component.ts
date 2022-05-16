import { Component, OnInit } from '@angular/core';
import { VideoStreamingService } from '../../services/video-streaming.service';

@Component({
  selector: 'app69-video11',
  templateUrl: './video11.component.html',
  styleUrls: ['./video11.component.scss']
})
export class Video11Component implements OnInit {

  //https://medium.com/canal-tech/how-video-streaming-works-on-the-web-an-introduction-7919739f7e1
  showVideoBox:boolean = false;
  constructor(private videoStreamingService:VideoStreamingService) { }

  ngOnInit(): void {
  }

  fetchVideo() {
    this.videoStreamingService.fetchVideo().pipe().subscribe(res => {
      console.log(res);
      this.showVideoBox = true;
      const htmlVideoElement = <HTMLVideoElement>document.getElementById('video-id-23');
      console.log(htmlVideoElement);
      this.processResponse(res, htmlVideoElement);
    });
  }

  processResponse(response:Blob, htmlElement) {

    if( !( response instanceof Blob ) ) { console.log('blob kaadanta baabu'); }
    if( !( htmlElement instanceof HTMLVideoElement ) ) { console.log('video element kadanta baabu') } 

    const newObjectUrl = URL.createObjectURL(response);
    const oldObjectUrl = htmlElement.currentSrc;
    if( oldObjectUrl && oldObjectUrl.startsWith('blob:') ) {
        htmlElement.src = ''; 
        URL.revokeObjectURL( oldObjectUrl );
    }
    htmlElement.src = newObjectUrl;    
    htmlElement.load();
    const playPromise = htmlElement.play();
    playPromise.then(function() {
      console.log('playing now')
    }).catch((err) => {
      console.log('error happened ',err);
    });

  }
}
