import { Component, OnInit } from '@angular/core';
import { ThemeService44 } from 'src/app/classes/themes23.service';

@Component({
  selector: 'app69-mat-theme24',
  templateUrl: './mat-theme24.component.html',
  styleUrls: ['./mat-theme24.component.scss']
})
export class MatTheme24Component implements OnInit {

  constructor(private themeService:ThemeService44) { }

  ngOnInit(): void {
  }

  changeIntoRed() {
    this.themeService.setTheme('red23');
  }

  changeIntoLight() {
    this.themeService.setTheme('light23');
  }

  changeIntoDark() {
    this.themeService.setTheme('dark23');
  }

}
