// this service logs message to console... twice... 
// we use this to see how @Inject works... 
// we wont use @Injectable() decorator, because LoggerTwiceService has no external dependency.. 
    // I mean its not a consumer of any dependency

export class LoggerTwiceService {

    constructor() { }

    log(message: any) {
        console.log(message);
        console.log(message);
    }

}