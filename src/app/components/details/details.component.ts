import { MoviesService } from './../../services/movies.service';
import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movies;
  moviesArray;
  searchedMovie;
  showModal = false;
  Details;
  DetailsLength = 0;
  movieDetails = {
      Title : "",
      Year : "",
      Poster : "",
      Type : ""
  };
  ratingVar;
  showModalRf = true;
  ratingObj : any []= [{
    "num" :0
          }];
  lastObjrate: any []= [{
        }];
  messageError: any;
  constructor(private movieService : MoviesService, private route: ActivatedRoute, private titleService:Title) { 
    this.searchedMovie = this.route.snapshot.params.searchbytitle;
    this.titleService.setTitle("Details | " + this.searchedMovie)
  }
  ngOnInit(): void {
    this.getMovie(this.searchedMovie);
    this.getMovieAllDetail(this.searchedMovie);
     }
  getMovie(val){
    this.movieService.getMovieBytitle(val)
    .subscribe(resp=>{
      this.movies = resp;
      this.moviesArray = this.movies.Search;
                   }       )}
  getMovieAllDetail(val){
    this.movieService.getMovieAllDetails(val)
    .subscribe(resp=>{
      this.Details = resp;
      if(this.Details.Response == 'True'){
        this.DetailsLength = 1;
      }
      else{
        this.messageError = this.Details.Error;
      }
      this.ratingVar = this.Details.imdbRating/2;
      this.ratingVar = parseInt(this.ratingVar);
      let j = 0;
      for(let i=0; i<5 ; i++){
        
        if(this.ratingVar > 0){
          this.ratingObj[i] = {num : 1};
        }
        else{
          this.lastObjrate[j] = {num : 0};
          j++;
        }
        this.ratingVar -= 1;
      }
    })
  }
getMovieAllDetails(imbdid){
    for(let i=0; i < this.moviesArray.length ; i++){
      if(this.moviesArray[i].imdbID == imbdid){
        this.movieDetails = this.moviesArray[i]
      }
    }
    this.showModal = true;
  }
}
