import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDbService } from '../movie-db.service';
import { LocalDataSource } from 'ng2-smart-table';
import { NbSpinnerService } from '@nebular/theme';
import { DataSource } from 'ng2-smart-table/lib/data-source/data-source';

enum TableItemType {
  MOVIE = 'Movie',
  TVSHOW = 'TV Show'
}

class TableItem {
  id: number;
  title: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  type: TableItemType;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  settings = {
    actions: {
      add: false, delete: false, edit: false
    },
    columns: {
      title: { title: 'Title' },
      popularity: { title: 'Popularity' },
      vote_count: { title: 'Voutes' },
      vote_average: { title: 'Avg. Vote' },
      type: { title: 'Type' }
    },
    pager: { perPage: 20 }
  };
  data: LocalDataSource;
  query: string;
  page = 1;
  total_pages = 1;

  constructor(
    private route: ActivatedRoute,
    private moviedbService: MovieDbService,
    private router: Router,
    private spinner: NbSpinnerService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.query = params['q'];
      this.data = new LocalDataSource([]);
      this.page = 1;
      this.getResults(this.page);
    });
  }

  getResults(page: number): void {
    let resolve: () => void;

    if (this.page === 1) {
      this.spinner.registerLoader(new Promise(ok => {
        resolve = ok;
      }));
      this.spinner.load();
    }

    const query = this.query;
    this.moviedbService.searchMoviesAndTvShows(this.query, this.page)
      .subscribe(results => {
        if (query !== this.query) {
          if (resolve) { resolve(); }
          return; // query has changed - stop this loop
        }

        this.page = results.page;
        this.total_pages = results.total_pages;
        this.settings.pager.perPage = results.movies.length + results.tv.length;

        results.movies.forEach(movie => this.data.add({
          id: movie.id,
          title: movie.title,
          popularity: movie.popularity,
          vote_count: movie.vote_count,
          vote_average: movie.vote_average,
          type: TableItemType.MOVIE
        }));

        results.tv.forEach(tvshow => this.data.add({
          id: tvshow.id,
          title: tvshow.name,
          popularity: tvshow.popularity,
          vote_count: tvshow.vote_count,
          vote_average: tvshow.vote_average,
          type: TableItemType.TVSHOW
        }));

        this.data.refresh(); // Force table to draw data

        // As there is no way to set total_pages directly to table and lazy load data - do it this way
        if (this.page < this.total_pages) {
          this.getResults(this.page + 1);
        }

        if (resolve) { resolve(); }
      }, err => console.log(err));
  }

  onUserRowSelect(event): void {
    this.router.navigate(['/movie', event.data.id]);
  }

}
