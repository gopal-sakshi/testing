import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class Translate23Service {

    private readonly localLangKey = 'lang';

    constructor(
        private translate: TranslateService
    ) {
        this.initActiveLang();
    }


    updateActiveLanguage(lang: string): void {
        this.translate.use(lang);
    }


    private initActiveLang(): void {
        let defaultLang = 'en';
        this.updateActiveLanguage(defaultLang);
    }

}
