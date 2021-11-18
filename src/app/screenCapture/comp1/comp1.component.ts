import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  startElem: HTMLElement;
  logElem: HTMLElement;
  videoElem: HTMLElement;
  stopElem: any;

  constructor() { 
    this.startElem = document.getElementById("start");
    this.logElem = document.getElementById("log");
    this.videoElem = document.getElementById("video");
    this.stopElem = document.getElementById("stop");
  }

  ngOnInit(): void {
    alert("in ng on init");
    this.blahblah();
    this.blahblah2();
  }

  async startCapture(displayMediaOptions: MediaStreamConstraints | undefined) {
    alert("in start capture");
    try {
      // @ts-ignore
      return navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    } catch (err) {
      console.error("Error:" + err);
      return null;
    }
   }

// Options for getDisplayMedia()

  displayMediaOptions = {
    audio: false,
    video: {
      cursor: "always"
    },
    
  };

  stopCapture(evt) {
    // let tracks = this.videoElem.srcObject.getTracks();
  
    // tracks.forEach(track => track.stop());
    // this.videoElem.srcObject = null;
  }

  blahblah () {
    // alert("in blahblah");

    // this.startElem.addEventListener("click", () => {
    //   this.startCapture(this.displayMediaOptions);
    //   alert("event listner added");
    // }, false);
  }
  
  blahblah2 () {
    this.stopElem.addEventListener("click", function(evt) {
      this.stopCapture();
    }, false);
  }

  dumpOptionsInfo() {
    // const videoTrack = this.videoElem.srcObject.getVideoTracks()[0];
  
    // console.info("Track settings:");
    // console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
    // console.info("Track constraints:");
    // console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
  }
}
