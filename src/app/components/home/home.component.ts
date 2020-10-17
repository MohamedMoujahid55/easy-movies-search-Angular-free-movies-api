import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image = "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg"
  mySearshtitle;
  val="game of thrones";
  Details1;
  Details2;
  Details3;
  Details4;
  Details5;
  Details6;
  DetailsLength = 0;
  messageError;
  ratingVar;
  lastObjrate: any;
  ratingObj: any;
  newval;
  moviesTab= ["Years a Slave","Angry Men","Idiots", "Wabbit Twouble","Waiting...", "Waiting for Guffman", "You Only Live Twice", "Zombieland", "Zodiac" , "X-Men", "Young and Innocent" , "Yogi Bear" , "Zorro, The Gay Blade" , "Early Man", "Easter Yeggs", "Ed Wood" , "Epic Movie" , "Evolution" , "Elizabeth" , "Factory Girl", "Fantasia", "Fast & Furious", "Fat Albert", "Fight Club","Frozen", "Funny Farm","Hackers","Halloween","Hangover","Harry Potter and the Sorcerer's Stone","Heat","Head","see","mr.robot","game of thrones","matrix","robot","catch me if you can", "Mission: Impossible",
              "In The Loop","Isle of Dogs","Iron Man","Ice Princess","Identity Thief","Identity Thief","Avengers: Endgame","Avatar","Titanic","Star Wars","Jurassic World","The Lion King"]                                 
  constructor(private movieService : MoviesService, private titleService:Title ) {
    this.titleService.setTitle("EasyMoviesSearch | home")
   }
  ngOnInit(): void {
     this.getMovieAllDetail("work it", "Spenser Confidential", "The old guard");
     this.getDailyMovies();
     
  }
  onClickMe(title) {
     this.mySearshtitle = title.value;
  }
  getMovieAllDetail(val1, val2, val3):any{
    this.movieService.getMovieAllDetails(val1)
    .subscribe(resp=>{
      this.Details1 = resp;
    })
    this.movieService.getMovieAllDetails(val2)
    .subscribe(resp=>{
      this.Details2 = resp;
      
    })

    this.movieService.getMovieAllDetails(val3)
    .subscribe(resp=>{
      this.Details3 = resp;
    })
  }
  getMovieAllDetail2(val4:number, val5:number, val6:number){
    this.movieService.getMovieAllDetails(this.moviesTab[val4])
    .subscribe(resp=>{
      this.Details4 = resp;
    })
    this.movieService.getMovieAllDetails(this.moviesTab[val5])
    .subscribe(resp=>{
      this.Details5 = resp;  
    })
    this.movieService.getMovieAllDetails(this.moviesTab[val6])
    .subscribe(resp=>{
      this.Details6 = resp;
    })
  }
  getDailyMovies(){
    this.getMovieAllDetail2(this.getRandomInt(this.moviesTab.length),this.getRandomInt(this.moviesTab.length),this.getRandomInt(this.moviesTab.length))
    setInterval(()=>{
      this.getMovieAllDetail2(this.getRandomInt(this.moviesTab.length),this.getRandomInt(this.moviesTab.length),this.getRandomInt(this.moviesTab.length))
    },86400000)
  }
  getRandomInt(max) {  
    return Math.floor(Math.random() * Math.floor(max));
  } 
}
