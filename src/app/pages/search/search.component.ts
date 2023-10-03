import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import { MoviesResults } from 'src/app/models/movies-result/movies-results';
import { MovieService } from 'src/app/services/movie.service';
import { ReturnResult } from 'src/app/shared/models/return-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchForm!: FormGroup;
  public searchResult: MoviesResults[] = [];

  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
        movieName: ['']
    });
  }

  submitForm(): void {
    let movieName = this.searchForm.value;
    this.movieService.filteredMovie(movieName).subscribe((respData: ReturnResult) => {
      if(respData.results?.length > 0){
        this.searchResult = respData.results;
      }
    });
  }
}
