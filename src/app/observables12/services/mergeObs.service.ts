import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class MergeObservableService {
    
    realMadridPlayers:string[] = ['Courtious', 'Carvajal', 'Militao', 'Alaba', 'Mendy', 'Modric', 'Casemiro', 'Kroos', 'Rodrygo', 'Benzema', 'Vinicius', 'Lunin', 'Vasquez', 'Nacho', 'Vallejo', 'Marcelo', 'Valverde', 'Ceballos', 'Isco', 'Hazard', 'Jovic', 'Bale'];
    // 22, 20
    oldSquad:string[] = ['Casillas', 'Arbeloa', 'Pepe', 'Ramos', 'Marcelo12', 'Khedira', 'Alonso', 'Ozil', 'Dimaria', 'Benz9', 'CR7','Kaka', 'Higuain', 'Callejon', 'Granero', 'Essien', 'Antonio Adan', 'Albiol', 'Coentrao', 'Essien', 'Morata']

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

}