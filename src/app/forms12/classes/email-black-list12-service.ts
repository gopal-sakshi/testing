
export class EmailBlackList12Service {

    isValidEmail(emailString:string):boolean {
        if(emailString === 'gopal@gmail.com') {
            return false;
        } else {
            return true;
        }
    }

}