import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/CountryService';


@Component({
  selector: 'app69-primeng23',
  templateUrl: './primeng23.component.html',
  styleUrls: ['./primeng23.component.scss']
})
export class Primeng23Component implements OnInit {
  
  cities: any[];
  selectedCities1:any[] = [
    { name: "New York", code: "NY" },
    { name: "London", code: "LDN" }
  ];
  selectedCities2: string[] = [];

  countries: any[];
  selectedCountries1: string[] = [];
  selectedCountries2: string[] = [];

  items: any[];
  item: string;
  // primeng ====> this dependency removed from package.json ---> upstream dependency conflict

  constructor(private countryService: CountryService) {
    
    this.items = [];
    this.countryService.getCountries().then(countries => {
      this.items = countries;
    });

    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" }
    ];

    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
  }

  ngOnInit() {
  }

}
