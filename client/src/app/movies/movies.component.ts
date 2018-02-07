import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service';
import { UriHelper, PosterSize, MoviesNowPlayingResponse, MovieListItem } from '../movie-db-types';
import { NbSpinnerService } from '@nebular/theme';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = 'Now in theaters';
  page = 1;
  total_pages = 1;
  dates: {
    maximum: string,
    minimum: string
  };

  movies: MovieListItem[];

  constructor(private moviedbService: MovieDbService, private spinner: NbSpinnerService) { }

  ngOnInit() {
    this.getMovies(this.page);
  }

  getMovies(page): void {

    this.spinner.registerLoader(new Promise((ok, fail) => {
      this.moviedbService.getMovies().subscribe(resp => {
        this.page = resp.page;
        this.total_pages = resp.total_pages;
        this.movies = resp.results;
        this.dates = resp.dates;
        ok();
      });
    }));
    this.spinner.load();
  }

  getPosterFor(movie: MovieListItem): string {
    return UriHelper.getPoster(movie.poster_path, PosterSize.medium);
  }

}
