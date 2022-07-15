export abstract class Master2  {

	public randoms: number[];
	public abstract displayName: string;

	constructor() {
        console.log('master got called');
		this.randoms = [];
		const numberOfLinks = this.getRandom(10);
		for (let i = 0; i < numberOfLinks; i++) {
			this.randoms.push(this.getRandom(100));
		}
    }
	
	getRandom(max: number): number {
		return Math.floor(Math.random() * max);
	}

    destroyStuff() {
        console.log('destroyed stuff in abstract class');
    }
}