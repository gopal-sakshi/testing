import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class VideoStreamingService {
    
    url:string = 'http://localhost:3039/videos';

    constructor(private httpClient:HttpClient) {}

    // https://blog.logrocket.com/build-video-streaming-server-node/
    fetchVideo(videoName:string = 'tiger') {
        let videoUrl = this.url + `/${videoName}`;
        let headers = new HttpHeaders();
        headers = headers.append('range', '10000000');
        return this.httpClient.get(videoUrl, {headers, responseType: 'blob' as const});
    }

    uploadVideo() {
        
    }

}