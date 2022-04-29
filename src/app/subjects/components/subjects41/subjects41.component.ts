import { Component, OnInit } from '@angular/core';
import { MiddleManService } from '../../services/middleman.service';

@Component({
  selector: 'app69-subjects41',
  templateUrl: './subjects41.component.html',
  styleUrls: ['./subjects41.component.scss']
})
export class Subjects41Component implements OnInit {

  // we will use Subjects... the data will be received in subjects42, subjects43 components
    // BehaviourSubjects ----> use subjects45 component
    // RelaySubjects ----> use subjects46 component
    // Async Subjects ----> use subjects47 component
  constructor(private middlemanService: MiddleManService) { }

  ngOnInit(): void {    
  }

  broadcast23() {
    const clubElement = <HTMLInputElement>document.getElementById('inputClub');
    const playerElement = <HTMLInputElement>document.getElementById('inputPlayer');    
    console.log(clubElement.value);console.log(playerElement.value);
    this.middlemanService.sendFootballMsg({club: clubElement.value, player: playerElement.value});
  }

  broadcast24() {
    const countryElement = <HTMLInputElement>document.getElementById('inputCountry');
    this.middlemanService.sendCountryMsg({country:countryElement.value});
  }

  broadcast25() {
    const heroElement = <HTMLInputElement>document.getElementById('inputHero');
    this.middlemanService.sendHeroMsg({hero:heroElement.value});
  }

  broadcast26() {
    const animalElement = <HTMLInputElement>document.getElementById('inputAnimal');
    this.middlemanService.sendAnimalMsg({animal:animalElement.value});
  }

  completeAsync() {
    this.middlemanService.animalMsgAsyncSubject.complete();
  }

}
