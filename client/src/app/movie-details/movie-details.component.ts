import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UriHelper, BackdropSize, MovieDetails } from '../movie-db-types';
import { MovieDbService } from '../movie-db.service';
import { NbSpinnerService } from '@nebular/theme';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetails;

  constructor(
    private route: ActivatedRoute,
    private moviedbService: MovieDbService,
    private location: Location,
    private spinner: NbSpinnerService
  ) { }

  ngOnInit() {
    if (!this.movie) {
      this.getMovie();
    }
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.spinner.registerLoader(new Promise(ok => {
      this.moviedbService.getMovie(id)
        .subscribe(movie => { this.movie = movie; ok(); });
    }));
    this.spinner.load();
  }

  getBackdrop(): string {
    if (!this.movie) { return ''; }
    return UriHelper.getBackdrop(this.movie.backdrop_path, BackdropSize.big);
  }
}
