import { Component, OnInit, Input } from '@angular/core';
import { UriHelper, BackdropSize, TvDetails } from '../movie-db-types';
import { ActivatedRoute } from '@angular/router';
import { MovieDbService } from '../movie-db.service';
import { NbSpinnerService } from '@nebular/theme';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {
  tvshow: TvDetails;

  constructor(
    private route: ActivatedRoute,
    private moviedbService: MovieDbService,
    private spinner: NbSpinnerService
  ) { }

  ngOnInit() {
    this.getTvShow();
  }

  getTvShow(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.spinner.registerLoader(new Promise(ok => {
      this.moviedbService.getTvShow(id)
        .subscribe(tvshow => { this.tvshow = tvshow; ok(); });
    }));
    this.spinner.load();
  }

  getBackdrop(): string {
    if (!this.tvshow) { return ''; }
    return UriHelper.getBackdrop(this.tvshow.backdrop_path, BackdropSize.big);
  }
}
