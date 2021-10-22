import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.baseUrl;
  private apiKey = environment.apiKey
  constructor(private http: HttpClient) { }

  httpOptions = { 
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa('test:test')
    })
  };

  getTopMovies() {
    return this.http.get(this.baseUrl + "/Db/GetTopMovies", this.httpOptions);
  }

  GetTopTv() {
    return this.http.get(this.baseUrl + "/Db/GetTopTv", this.httpOptions);
  }

  GetGenres(type: string) {
    return this.http.get(this.baseUrl + "/Db/GetGenres/" + type, this.httpOptions);
  }

  GetMovieDetails(id: number) {
    return this.http.get(this.baseUrl + "/Db/GetMovieDetails/" + id, this.httpOptions);
  }

  GetTvDetails(id: number) {
    return this.http.get(this.baseUrl + "/Db/GetTvDetails/" + id, this.httpOptions);
  }

  MovieDiscover(query: string) {
    return this.http.get(this.baseUrl + "/Db/MovieDiscover/api_key=" + this.apiKey + '&' + query, this.httpOptions);
  }

  TvDiscover(query: string) {
    return this.http.get(this.baseUrl + "/Db/TvDiscover/api_key=" + this.apiKey + '&' + query, this.httpOptions);
  }

}
