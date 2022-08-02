import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app69-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  footballClubs = [
    {
      name: 'Real Madrid',
      clTitles: 13,
      domesticTitles: 34,
      clubAddress: {
        stadiumName: 'Santiago Bernabeu',
        cityName: 'Madrid',
        countryName: 'Spain'
      }
    },
    {
      name: 'AC Milan',
      clTitles: 7,
      domesticTitles: 18,
      clubAddress: {
        stadiumName: 'San Siro',
        cityName: 'Milan',
        countryName: 'Italy'
      }
    },
    {
      name: 'FC Bayern Munich',
      clTitles: 6,
      domesticTitles: 31,
      clubAddress: {
        stadiumName: 'Allianz Arena',
        cityName: 'Munich',
        countryName: 'Germany'
      }
    },
    {
      name: 'Liverpool',
      clTitles: 6,
      domesticTitles: 19,
      clubAddress: {
        stadiumName: 'Anfield',
        cityName: 'Liverpool',
        countryName: 'England'
      }
    },
    {
      name: 'Barcelona',
      clTitles: 5,
      domesticTitles: 26,
      clubAddress: {
        stadiumName: 'Camp Nou',
        cityName: 'Barcelona',
        countryName: 'Spain'
      }
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
