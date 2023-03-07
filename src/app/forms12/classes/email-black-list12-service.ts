import { Injectable } from "@angular/core";

@Injectable()
export class EmailBlackList12Service {    
    validEmails:string[] = ['gop@gmail', 'ped@gmail'];    
    isInvalidEmail(emailString:string):boolean { return this.validEmails.includes(emailString) ? true : false };
    // isValidEmail(emailString:string):boolean { return this.validEmails.includes(emailString) ? false : true };
}
