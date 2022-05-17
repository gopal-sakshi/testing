import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FutDbService {

    baseUrl:string = 'https://futdb.app/api'
    constructor(private httpClient:HttpClient) { }

    // for some reason, I am getting 404 error... while curl is working... 
    getPlayers() {
        let playersUrl = this.baseUrl + 'players?page=1&limit=50';
        let headers = new HttpHeaders();
        headers = headers.append('X-AUTH-TOKEN', '9e63b8a5-a72b-4898-930d-9cc7278b78f5');
        headers = headers.append('Content-Type', 'application/json');
        return this.httpClient.get(playersUrl, {headers});
    }
}

/*
    Example of curl command

    curl -X 'GET' \
        'https://futdb.app/api/players?page=1&limit=100' \
        -H 'accept: application/json' \
        -H 'X-AUTH-TOKEN: 9e63b8a5-a72b-4898-930d-9cc7278b78f5'
*/