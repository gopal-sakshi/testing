import { Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-dom12',
  templateUrl: './home-dom12.component.html',
  styleUrls: ['./home-dom12.component.scss']
})
export class HomeDom12Component implements OnInit {

  showEncapsulation:boolean = false;
  showRenderer2:boolean = false;
  constructor(private titleService:Title, private element: ElementRef) { }

  ngOnInit(): void {
    console.log(this.element.nativeElement);
    this.titleService.setTitle('dom12_anta');
    var link = <HTMLLinkElement>document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    // link.href = 'https://stackoverflow.com/favicon.ico';
    link.href = 'rm_favicon.ico';
  }

  ngOnDestroy() {
    this.titleService.setTitle('Testing');
    var link = <HTMLLinkElement>document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    // link.href = 'https://stackoverflow.com/favicon.ico';
    link.href = 'gopal612_favicon.ico';
  }

}
