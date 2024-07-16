import { Injectable } from "@angular/core";
import nobelWinners from '../classes/nobelWinners.json'

@Injectable()
export class SwitchMap22Service {
    
    nobelWinners = nobelWinners;
    
    spanishClubs:string[] = ['Real Madrid', 'Barcelona', 'Atleti', 'Valencia', 'Sevilla', 'Athletic Bilbao', 'Real Betis', 'Villarreal', 'Real Sociedad', 'Osasuna', 'Celta', 'Rayo Vallecano', 'Elche', 'Espanyol', 'Getafe', 'Mallorca', 'Cadiz', 'Granada', 'Levante', 'Alaves'];

    englishClubs:string[] = ['Man City', 'Liverpool', 'Chelsea', 'Tottenham', 'Arsenal', 'Manchester United', 'Westham united', 'Leiceister', 'Brighton', 'Wolves', 'Crystal Palace', 'Newcastle', 'Brentford', 'Aston Villa', 'Southampton', 'Everton', 'Leeds United', 'Burnley', 'Watford', 'Norwich City'];

    stadiums1:string[] = ['Camp Nou', 'Santiago Bernabeu',
        'Wanda Metropolitano', 'Benito Villamarin', 'San Mames', 'Mestalla', 'Ramon Sanchez Pizjuan', 
        'Anoeta', 'Balaidos', 'La Ceramica', 'Coliseum'
    ];      // 'Westfalenstadion', 'San Siro',

    stadiums2:string[] = ['Wembley Stadium', 'Old Trafford', 'London Stadium', 'Anfield', 'Emirates', 'Manchester city', 'St James park', 'villa park', 'goodison park', 'Stamford Bridge']
    constructor() {}

    async searchClubs1(keyword:string) {

        var regexey = new RegExp(keyword, 'gi');
        let searchResults = this.spanishClubs.filter(clubs => clubs.match(regexey))         // case-insensitive
        await this.delay23(2000);
        return searchResults;
    }

    async delay23(seconds:number) {
        return new Promise(resolve => setTimeout(resolve, seconds));
    }

    // if I remove async here ===> i dont get results as array
    async searchStadiums1(searchKey:string) {
        let regex23 = new RegExp(searchKey, 'gi');
        return this.stadiums1.filter(stadiums => stadiums.match(regex23))
    }


}