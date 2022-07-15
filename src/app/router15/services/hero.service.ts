export class HeroService {
    count:number = 0;
    heroList:any = [
        { name: 'chiru', id: 1},
        { name: 'ntr', id: 2},
        { name: 'prabhas', id: 3}
    ]
    heroFullDetails:any = [
        { name: 'chiru', id: 1, hitMovies: ['indra', 'gang leader'], title: 'Mega Star'},
        { name: 'ntr', id: 2, hitMovies: ['simhadri', 'aadi'], title: 'young tiger'},
        { name: 'prabhas', id: 3, hitMovies: ['varsham', 'baahubali'], title: 'rebel star'}
    ]
    
    constructor() { }

    getHeroList() {
        console.log('hero list served for ',++this.count);
        return this.heroList;
    }

    getHeroFullDetails(heroId:number) {
        return this.heroFullDetails.find(hero => hero.id == heroId);
    }
}