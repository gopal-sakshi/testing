
export class EmailBlackList12Service {

    isValidEmail(emailString:string):boolean {
        if(emailString === 'gop@g.com' || emailString === 'ped@g.com') {
            return false;
        } else {
            return true;
        }
    }

}
