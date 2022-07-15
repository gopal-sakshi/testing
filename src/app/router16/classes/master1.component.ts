import { Directive, Injectable, OnDestroy, OnInit } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export abstract class Master1Component implements OnInit, OnDestroy {
	public randoms: number[];
	public abstract displayName: string;

	constructor() { }
	ngOnInit(): void {
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

	ngOnDestroy(): void {
		console.log(`Destroy ${this.displayName}`);
	}
}