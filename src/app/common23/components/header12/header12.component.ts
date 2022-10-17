import { Component, OnInit } from '@angular/core';
import { Translate23Service } from '../../services/translate23.service';

@Component({
  selector: 'app-header12',
  templateUrl: './header12.component.html',
  styleUrls: ['./header12.component.scss']
})
export class Header12Component implements OnInit {

  todayDate: Date = new Date();
  selectedLang: string;
  
  constructor(
    private translate: Translate23Service) { }

  ngOnInit(): void {
  }

  changeLanguage(language:string) {
    this.selectedLang = language;
    this.translate.updateActiveLanguage(language);    
  }

}
