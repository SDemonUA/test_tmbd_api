import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MoviesNowPlayingResponse, MovieDetails, TvOnAirResponse, TvDetails, SearchResponse } from './movie-db-types';

@Injectable()
export class MovieDbService {

  constructor(private http: HttpClient) { }

  private api_path = '/v1/moviedb/';

  getMovies(page: number = 1): Observable<MoviesNowPlayingResponse> {
    return this.http.get<MoviesNowPlayingResponse>(this.api_path + 'now_playing', { params: { page: String(page) } });
  }

  getMovie(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(this.api_path + 'movie/' + id);
  }

  getTvShows(page: number = 1): Observable<TvOnAirResponse> {
    return this.http.get<TvOnAirResponse>(this.api_path + 'tv_ongoing', { params: { page: String(page) } });
  }

  getTvShow(id: number): Observable<TvDetails> {
    return this.http.get<TvDetails>(this.api_path + 'tv/' + id);
  }

  searchMoviesAndTvShows(query: string, page: number = 1): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.api_path + 'search', { params: { query: String(query), page: String(page) } });
  }

}
