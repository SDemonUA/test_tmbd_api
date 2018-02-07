import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service';
import { UriHelper, PosterSize, TvListItem } from '../movie-db-types';
import { NbSpinnerService } from '@nebular/theme';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvShowsComponent implements OnInit {
  title = 'Watch it on Your TV Screen';
  tvshows: TvListItem[];
  page = 1;
  total_pages = 1;

  constructor(private moviedbService: MovieDbService, private spinner: NbSpinnerService) { }

  ngOnInit() {
    this.getTvShows();
  }

  getTvShows(): void {
    this.spinner.registerLoader(new Promise((ok, fail) => {
      this.moviedbService.getTvShows()
        .subscribe(res => {
          this.page = res.page;
          this.total_pages = res.total_pages;
          this.tvshows = res.results;
          ok();
        });
    }));
    this.spinner.load();
  }

  getPosterFor(tvshow: TvListItem): string {
    return UriHelper.getPoster(tvshow.poster_path, PosterSize.medium);
  }
}
