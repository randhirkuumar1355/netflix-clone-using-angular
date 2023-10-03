import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { APIENDPOINT } from '../shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private sharedService: SharedService) { }

  public bannerApiData() {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.BANNER + environment.apiKey).pipe(catchError(this.errorHandler));
  }

  public trendingMovies() {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.TRENDING + environment.apiKey).pipe(catchError(this.errorHandler));
  }

  public filteredMovie(data: any) {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.FILTER + environment.apiKey + APIENDPOINT.MOVIES.FILTERQUERY + data.movieName).pipe(catchError(this.errorHandler));
  }

  public movieDetails(movieId: number) {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.MOVIE + movieId + APIENDPOINT.MOVIES.APIKEY + environment.apiKey).pipe(catchError(this.errorHandler));
  }

  public movieVideo(movieId: number) {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.MOVIE + movieId + APIENDPOINT.MOVIES.VIDEOSAPIKEY + environment.apiKey).pipe(catchError(this.errorHandler));
  }

  public movieCast(movieId: number) {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.MOVIE + movieId + APIENDPOINT.MOVIES.MOVIECREDITS + environment.apiKey).pipe(catchError(this.errorHandler));
  }

  public actionMovies() {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.DISCOVERMOVIESWITHAPIKEY + environment.apiKey + APIENDPOINT.MOVIES.ACTION).pipe(catchError(this.errorHandler));
  }

  public advantureMovies() {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.DISCOVERMOVIESWITHAPIKEY + environment.apiKey + APIENDPOINT.MOVIES.ADVANTURE).pipe(catchError(this.errorHandler));
  }

  public animationMovies() {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.DISCOVERMOVIESWITHAPIKEY + environment.apiKey + APIENDPOINT.MOVIES.ANIMATION).pipe(catchError(this.errorHandler));
  }

  public comedyMovies() {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.DISCOVERMOVIESWITHAPIKEY + environment.apiKey + APIENDPOINT.MOVIES.COMEDY).pipe(catchError(this.errorHandler));
  }

  public documentaryMovies() {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.DISCOVERMOVIESWITHAPIKEY + environment.apiKey + APIENDPOINT.MOVIES.DOCUMENTARY).pipe(catchError(this.errorHandler));
  }

  public scienceFictionMovies() {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.DISCOVERMOVIESWITHAPIKEY + environment.apiKey + APIENDPOINT.MOVIES.SCIFI).pipe(catchError(this.errorHandler));
  }

  public thrillerMovies() {
    return this.sharedService.get(environment.baseUrl + APIENDPOINT.MOVIES.DISCOVERMOVIESWITHAPIKEY + environment.apiKey + APIENDPOINT.MOVIES.THRILLER).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
