import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits } from 'src/app/models/credits';
import { Movie } from 'src/app/models/movie';
import { Videos } from 'src/app/models/videos';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movieDetails: Movie = new Movie();
  public movieVideo: Videos = new Videos();
  public movieCast: Credits = new Credits();
  
  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    let getParamId: number = Number(this.router.snapshot.paramMap.get('id'));
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id: number) {
    this.movieService.movieDetails(id).subscribe((respData: any) => {
      if(respData!=null){
        this.movieDetails = respData;
      }
    });
  }

  getVideo(id: number){
    this.movieService.movieVideo(id).subscribe((respData: any) => {
      if(respData){
        respData.results.forEach((element:any) => {
          if(element.type == "Trailer")
          {
            this.movieVideo.results.key = element.key;
          }
        });
      }
    });
  }

  getMovieCast(id: number){
    this.movieService.movieCast(id).subscribe((respData: any) => {
      if(respData!=null){
        this.movieCast.cast = respData.cast;
      }
    });
  }
}
