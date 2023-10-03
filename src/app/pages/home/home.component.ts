import { Component, OnInit } from '@angular/core';
import { BannerResults } from 'src/app/models/banner-result/banner-results';
import { MoviesResults } from 'src/app/models/movies-result/movies-results';
import { MovieService } from 'src/app/services/movie.service';
import { ReturnResult } from 'src/app/shared/models/return-result';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public moviesBanner: BannerResults[] = [];
  public trendingMoviesList: MoviesResults[] = [];
  //action:28, advanture:12, animation: 16, comedy: 35, documentory: 99, science-fiction: 878, thriller: 53
  public actionMovies: MoviesResults[] = [];
  public advantureMovies: MoviesResults[] = [];
  public animationMovies: MoviesResults[] = [];
  public comedyMovies: MoviesResults[] = [];
  public documentoryMovies: MoviesResults[] = [];
  public scienceFictionMovies: MoviesResults[] = [];
  public thrillerMovies: MoviesResults[] = [];

  constructor(private movieService: MovieService) {  }

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovies();
    this.getActionMovies();
    this.getAdventureMovies();
    this.getAnimationMovies();
    this.getComedyMovies();
    this.getDocumentoryMovies();
    this.getScienceFictionMovies();
    this.getThrillerMovies();
  }

  // Get movie's banner
  bannerData(){
    this.movieService.bannerApiData().subscribe((respData: ReturnResult) => {
      if(respData.results?.length > 0){
        this.moviesBanner = respData.results;
      }
    });
  }

  //Get trending movies
  trendingMovies(){
    this.movieService.trendingMovies().subscribe((respData: ReturnResult) => {
      if(respData.results?.length > 0){
        this.trendingMoviesList = respData.results;
      }
    });
  }

  //Get action movies
  getActionMovies() {
    this.movieService.actionMovies().subscribe((respData: ReturnResult) => {
      if(respData.results?.length > 0){
        this.actionMovies = respData.results;
      }
    });
  }

  //Get advanture movies
  getAdventureMovies() {
    this.movieService.advantureMovies().subscribe((respData: ReturnResult) => {
      if(respData.results?.length > 0){
        this.advantureMovies = respData.results;
      }
    });
  }

  //Get animation movies
  getAnimationMovies() {
    this.movieService.animationMovies().subscribe((respData: ReturnResult) => {
      if(respData.results?.length > 0){
        this.animationMovies = respData.results;
      }
    });
  }

  //Get comedy movies
  getComedyMovies() {
    this.movieService.comedyMovies().subscribe((respData: ReturnResult) => {
      if(respData.results?.length > 0){
        this.comedyMovies = respData.results;
      }
    });
  }

  //Get documentory movies
  getDocumentoryMovies() {
    this.movieService.documentaryMovies().subscribe((respData: ReturnResult) => {
      if(respData.results?.length > 0){
        this.documentoryMovies = respData.results;
      }
    });
  }

  //Get Sci-Fi movies
  getScienceFictionMovies() {
    this.movieService.scienceFictionMovies().subscribe((respData: ReturnResult) => {
      if(respData.results?.length > 0){
        this.scienceFictionMovies = respData.results;
      }
    });
  }

  //Get thriller movies
  getThrillerMovies() {
    this.movieService.thrillerMovies().subscribe((respData: ReturnResult) => {
      if(respData.results?.length > 0){
        this.thrillerMovies = respData.results;
      }
    });
  }
}
