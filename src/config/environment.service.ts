import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

@Injectable({
    providedIn: 'root'
})

export class EnvironmentService {
    APP_NAME: string; 
    envName: string;
    production: boolean;
    
    constructor() {
        this.APP_NAME = environment.APP_NAME,
        this.envName = environment.envName,
        this.production = environment.production
    }
}

