/*
    we can configure injectors in two ways 
    - Option1 ===> @Injectable(), @Injectable({ providedIn: 'root' })
    - Option2 ===> without @Injectable() decorator --> add this class in providers array of NgModule

    Here, we didnt add @Injectable() decorator, and used Option2
*/
export class LoggerTwiceService {

    constructor() { }

    log(message: any) {
        console.log("loggin once ===> ", message);
        console.log("logging twice ===> ", message);
    }

}