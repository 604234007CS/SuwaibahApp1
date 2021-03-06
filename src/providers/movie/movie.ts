import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  public baseURL = "https://api.themoviedb.org/3/";
  public apikey = "api_key=218b4b3296ce080f893a9be90183e7cb";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getNowPlaying(){
    const url = this.baseURL + 'movie/now_playing?' + this.apikey;
    return this.http.get(url);
  }

  
  getUpcoming(){
    const url = this.baseURL + 'movie/upcoming?' + this.apikey;
    return this.http.get(url);
  }

  getPopular(){
    const url = this.baseURL + 'movie/popular?' + this.apikey;
    return this.http.get(url);
  }

  getTopRated(){
    const url = this.baseURL + 'movie/top_rated?' + this.apikey;
    return this.http.get(url);
  }
  
}
