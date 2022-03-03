import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServiceCallService {

  constructor(private httpClient: HttpClient) {}

  getQuotes(): Observable<any> {
    const getOptions = {
      headers: '',
      responseType: 'text'
    }
    // return this.httpClient.get<any>('http://localhost:4000/dev/jingchak/jingchak/quotes/showALLQuotes', getOptions);
    return this.httpClient.get<any>('http://localhost:4000/dev/jingchak/jingchak/quotes/showALLQuotes', {responseType: 'text' as 'json'});
  }

  getPosts(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:4000/dev/jingchak/jingchak/posts/showALL', {responseType: 'text' as 'json'});
  }

  addPost(payload:string): Observable<any> {
    return this.httpClient.post<any>('http://localhost:4000/dev/jingchak/jingchak/posts/addPost', payload, {responseType: 'text' as 'json'});

    // this throws error... Method not allowed
    // return this.httpClient.put<any>('http://localhost:4000/dev/jingchak/jingchak/posts/addPost', payload);
  }

  addQuote(payload:string): Observable<any> {
    return this.httpClient.post<any>('http://localhost:4000/dev/jingchak/jingchak/quotes/addQuote', payload, {responseType: 'text' as 'json'});
  }

  postWithParams(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:4000/dev/jingchak/jingchak/posts/postWithParams/Luka?color=white&height=short', {responseType: 'text' as 'json'});
  }

}
