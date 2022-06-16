import { Injectable } from "@angular/core";
import nobelWinners from '../classes/nobelWinners.json'

@Injectable()
export class SwitchMap22Service {
    
    nobelWinners = nobelWinners;
    
    spanishClubs:string[] = ['Real Madrid', 'Barcelona', 'Atleti', 'Valencia', 'Sevilla', 'Athletic Bilbao', 'Real Betis', 'Villarreal', 'Real Sociedad', 'Osasuna', 'Celta', 'Rayo Vallecano', 'Elche', 'Espanyol', 'Getafe', 'Mallorca', 'Cadiz', 'Granada', 'Levante', 'Alaves'];

    englishClubs:string[] = ['Man City', 'Liverpool', 'Chelsea', 'Tottenham', 'Arsenal', 'Manchester United', 'Westham united', 'Leiceister', 'Brighton', 'Wolves', 'Crystal Palace', 'Newcastle', 'Brentford', 'Aston Villa', 'Southampton', 'Everton', 'Leeds United', 'Burnley', 'Watford', 'Norwich City'];

    constructor() {}

    async searchClubs1(keyword:string) {
        console.log('searching for ------> ',keyword);

        var searchResults = [];
        // searchResults = this.spanishClubs.filter(clubs => clubs.includes(keyword));     // case-sensitive

        var regexey = new RegExp(keyword, 'gi');
        searchResults = this.spanishClubs.filter(clubs => clubs.match(regexey))         // case-insensitive
        console.log('searchResults in service side ----> ',searchResults);
        await this.delay23(2000);
        return searchResults;
    }

    async delay23(seconds:number) {
        return new Promise(resolve => setTimeout(resolve, seconds));
    }

}