import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //private url = 'http://www.omdbapi.com/?s='+title+'&apikey=3818b5a8&page=1'
  constructor(private http : HttpClient) { }

  getMovieBytitle(title){
    let url = 'http://www.omdbapi.com/?s='+title+'&apikey=3818b5a8&page=1';
    return this.http.get(url);
  }
  getMovieAllDetails(title){
    let url = 'http://www.omdbapi.com/?t='+title+'&apikey=3818b5a8&page=1';
    return this.http.get(url);
  }

}
