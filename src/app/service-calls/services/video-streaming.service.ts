import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class VideoStreamingService {
    
    url:string = 'http://localhost:3039/videos';

    constructor(private httpClient:HttpClient) {}

    fetchVideo() {
        let videoUrl = this.url + '/2';
        let headers = new HttpHeaders();
        headers = headers.append('range', '1000');
        return this.httpClient.get(videoUrl, {headers, responseType: 'blob' as const});
    }

}