import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServiceCallService {

  serverless123Url:string = `http://localhost:4000/dev/jingchak/jingchak`;
  constructor(private httpClient: HttpClient) {}

  getQuotes(): Observable<any> {
    const getOptions = {
      headers: '',
      responseType: 'text'
    }
    // return this.httpClient.get<any>('http://localhost:4000/dev/jingchak/jingchak/quotes/showALLQuotes', getOptions);
    return this.httpClient.get<any>(`${this.serverless123Url}/quotes/showALLQuotes`, {responseType: 'text' as 'json'});
  }

  getPosts(): Observable<any> {
    return this.httpClient.get<any>(`${this.serverless123Url}/posts/showALL`, {responseType: 'text' as 'json'});
  }

  addPost(payload:string): Observable<any> {
    return this.httpClient.post<any>(`${this.serverless123Url}/posts/addPost`, payload, {responseType: 'text' as 'json'});
  }

  addQuote(payload:string): Observable<any> {
    return this.httpClient.post<any>(`${this.serverless123Url}/quotes/addQuote`, payload, {responseType: 'text' as 'json'});
  }

  postWithParams(): Observable<any> {
    return this.httpClient.get<any>(`${this.serverless123Url}/posts/postWithParams/Luka?color=white&height=short`, {responseType: 'text' as 'json'});
  }

}
