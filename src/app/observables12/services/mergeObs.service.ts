import { Injectable } from "@angular/core";
import { of } from "rxjs";
import players from '../classes/footballPlayers.json'                       // this will Wooooo0000OOOrrrrRRRRkkkkkkKKKKKKKkkkkkK
// import { players } from '../classes/footballPlayers.json'                   // this will throw ERROR
// import * as players from '../classes/footballPlayers.json'              // this will WORK
import nobelWinners from '../classes/nobelWinners.json'
@Injectable()
export class MergeObservableService {
    
    realMadridPlayers:string[] = ['Courtious', 'Carvajal', 'Militao', 'Alaba', 'Mendy', 'Modric', 'Casemiro', 'Kroos', 'Rodrygo', 'Benzema', 'Vinicius', 'Lunin', 'Vasquez', 'Nacho', 'Vallejo', 'Marcelo', 'Valverde', 'Ceballos', 'Isco', 'Hazard', 'Jovic', 'Bale'];
    // 22, 20
    oldSquad:string[] = ['Casillas', 'Arbeloa', 'Pepe', 'Ramos', 'Marcelo12', 'Khedira', 'Alonso', 'Ozil', 'Dimaria', 'Benz9', 'CR7','Kaka', 'Higuain', 'Callejon', 'Granero', 'Essien', 'Antonio Adan', 'Albiol', 'Coentrao', 'Essien', 'Morata']

    footballPlayers:any = players;
    nobelWinners:any = nobelWinners;

    constructor() {
        console.log(this.realMadridPlayers.length);
    }

    getPlayersFiveAtOnce(offset:number = 0, limit:number=5) {
        let responseValue = [];

    // You can use either of these two for loops... 
        // return 5 elements with offset... but ensure that if offset is 20, only 2 elements are returned (21st element & 22nd element)

    // APPROACH I
        // for(let i=offset; i<(offset+limit) && i<this.realMadridPlayers.length; i++) {
        //     responseValue.push(this.realMadridPlayers[i]);            
        // }

    // APPROACH II
        for(let i=offset; i<(offset+limit); i++) {
            if (i == this.realMadridPlayers.length) {
                console.log('breaking for loop');
                break;
            }
            responseValue.push(this.realMadridPlayers[i]);
        }
        return of(responseValue);
    }

    searchRMAPlayer(keyword:string) {
        var blah1 = this.realMadridPlayers.filter(player => player.includes(keyword) == true);   // includes is case-sensitive
        
        var blah2 = this.realMadridPlayers.filter(player => (player.match(/`${keyword}`/i)) != null);
        // If we try to pass a variable to the regex literal pattern it won’t work... we should use regex constructor

        var regexThingy = new RegExp(keyword, 'gi');        // uses both g & i flags
        var blah3 = this.realMadridPlayers.filter(player => (player.match(regexThingy)) != null);
        
        console.log(blah1);
        console.log(blah2);
        console.log(blah3);
    }

    searchPlayers(keyword:string) {
    
        var regexey = new RegExp(keyword, 'gi');
        var searchResults = this.footballPlayers.filter(player => (player.first_name.match(regexey) != null) || (player.last_name.match(regexey) != null));

        return of(searchResults);
    }

    searchNobelPlayers(keyword:string) {
        var nobelSearchResults = [];
        var regex21 = new RegExp(keyword, 'gi');
        for(let i=0; i<this.nobelWinners.length; i++) {
            if(this.nobelWinners[i].laureates) {
                this.nobelWinners[i].laureates.forEach((winner, index) => {
                    let fullName = winner?.firstname + '_' + winner?.surname;
                    fullName.match(regex21) != null ? nobelSearchResults.push({fullName: fullName, year: this.nobelWinners[i].year}) : '';
                })
            }
        }
        return nobelSearchResults;
    }

}

