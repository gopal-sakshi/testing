
export class EmailBlackList12Service {

    isInvalidEmail(emailString:string):boolean {
        if(emailString === 'gopal@gmail.com' || emailString === 'ped@gmail.com') {
            return true;
        } else {
            return false;
        }
    }

    isValidEmail(emailString:string):boolean {
        if(emailString === 'gopal@gmail.com' || emailString === 'ped@gmail.com') {
            return false;
        } else {
            return true;
        }
    }

}
