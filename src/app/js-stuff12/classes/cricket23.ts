import { SportAbstract12 } from "./sport-abstract12";

export abstract class Cricket23 extends SportAbstract12 {

    constructor() {
        super();
        this.sportName = 'cricket';
        this.playerPerTeam = 11;
    }

    sayHello() {
        console.log('saying hello from cricket23');
    }

    init23() {
        // this.init();
    }
}