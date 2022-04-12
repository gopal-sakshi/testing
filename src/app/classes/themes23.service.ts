import { Injectable } from "@angular/core";
import {Theme, light23, dark23, red23} from "./themes23";

@Injectable({
    providedIn:'root'
})
export class ThemeService44 {

    currentTheme:Theme = light23;
    availableThemes:Theme[] = [light23, dark23, red23];

    constructor() {}

    getAvailableThemes() {
        return this.availableThemes;
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    setTheme(theme:Theme|string):void {
        if(typeof theme == 'string') {
            console.log(theme);
            const index = this.availableThemes.findIndex(selectedTheme => selectedTheme.name == theme);
            console.log(index);
            this.currentTheme = this.availableThemes[index];
        } else {
            console.log('else block ',theme);
            this.currentTheme = theme;
        }
        console.log(this.currentTheme);
        Object.keys(this.currentTheme.properties).forEach(property => {
            document.documentElement.style.setProperty(property, this.currentTheme.properties[property]);
        });
    }
}
