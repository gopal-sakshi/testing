import { Observable } from "rxjs";
// It seems we cant create custom pipe
    // becase Observable.pipe23().subscribe() throws error                           // ERROR =======> pipe23 does not exist on observable
export class Pipe23 {
    public static pipe23(...operators23):Observable<any> {
        return operators23.reduce((source, next) => next(source), this)
    }
}
