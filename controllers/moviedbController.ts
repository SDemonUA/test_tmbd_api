import { Get, Post, Route, Body, Query, Header, Path, SuccessResponse, Controller } from 'tsoa';
import * as MovieDB from 'moviedb';
import { SearchResponse, MoviesNowPlayingResponse, MovieDetails, TvOnAirResponse, TvDetails, GenresResponse, TvListItem, MovieListItem } from '../models/moviedbModels';

const API_KEY = process.env.TMDB_API;

@Route('moviedb')
export class MovieDBcontroller extends Controller {
	@Get('now_playing')
	public async getNowPlayingMovies(@Query() page: number = 1): Promise<MoviesNowPlayingResponse> {
		return <Promise<MoviesNowPlayingResponse>>new Promise((resolve, reject) => {
			MovieDB(API_KEY).miscNowPlayingMovies({ page }, (err, res) => {
				if (err) return reject(err);
				resolve(res);
			});
		})
	}

	@Get('movie/{id}')
	public async getMovieDetails(id: number): Promise<MovieDetails>	{
		return <Promise<MovieDetails>>new Promise((resolve, reject) => {
			MovieDB(API_KEY).movieInfo({ id }, (err, res) => {
				if (err) return reject(err);
				resolve(res);
			})
		});
	}

	@Get('tv_ongoing')
	public async getTvOnTheAir( @Query() page: number = 1): Promise<TvOnAirResponse> {
		return <Promise<TvOnAirResponse>>new Promise((resolve, reject) => {
			MovieDB(API_KEY).tvOnTheAir({ page }, (err, res) => {
				if (err) return reject(err);
				resolve(res);
			})
		});
	}

	@Get('tv/{id}')
	public async getTvDetails(id: number): Promise<TvDetails> {
		return <Promise<TvDetails>>new Promise((resolve, reject) => {
			MovieDB(API_KEY).tvInfo({ id }, (err, res) => {
				if (err) return reject(err);
				resolve(res);
			})
		});
	}

	@Get('genres')
	public async getGenres(): Promise<GenresResponse> {
		return <Promise<GenresResponse>>new Promise((resolve, reject) => {
			MovieDB(API_KEY).genreList({}, (err, res) => {
				if (err) return reject(err);
				resolve(res);
			})
		});
	}

	@Get('search')
	public async search( @Query() query: string, @Query() page: number = 1): Promise<SearchResponse> {
		const API = MovieDB(API_KEY);
		return <Promise<SearchResponse>>Promise.all([
			<Promise<PagedResponse<TvListItem>>>new Promise((resolve, reject) => {
				API.searchTv({ query, page }, (err, res) => {
					if (err) reject(err);
					else resolve(res);
				});
			}),
			<Promise<PagedResponse<MovieListItem>>>new Promise((resolve, reject) => {
				API.searchMovie({ query, page }, (err, res) => {
					if (err) reject(err);
					else resolve(res);
				});
			})
		]).then(responses => {
			const [tv, movies] = responses;

			return {
				page: maxField(responses, 'page'),
				total_pages: maxField(responses, 'total_pages'),
				total_results: responses.map(r => r.total_results).reduce((sum, num) => sum + num, 0),

				tv: tv.results,
				total_results_tv: tv.total_results,
				total_pages_tv: tv.total_pages,

				movies: movies.results,
				total_results_movie: movies.total_results,
				total_pages_movie: movies.total_pages,
			}
		})
	}

	@Get('*')
	public async error404() {
		this.setStatus(404);
		return Promise.resolve();
	}

}

function maxField<T>(arr: T[], field_name): number {
	return Math.max.apply(null, arr.map(it => field_name in it ? it[field_name] : null));
}

interface PagedResponse<T> {
	page: number;
	results: T[],
	total_results: number;
	total_pages: number;
}