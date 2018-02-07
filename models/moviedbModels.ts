export interface GenresResponse {
	genres: Genre[];
}

export interface Genre {
	id: number;
	name: string;
}

export interface SearchResponse {
	page: number;
	total_pages: number;
	total_results: number;
	total_results_tv: number;
	total_results_movie: number;
	total_pages_tv: number;
	total_pages_movie: number;
	movies: MovieListItem[];
	tv: TvListItem[];
}

export interface TvOnAirResponse {
	page: number;
	results: TvListItem[];
	total_results: number;
	total_pages: number;
}

export interface TvListItem {
	poster_path: string | null;
	popularity: number;
	id: number;
	backdrop_path: string | null;
	vote_average: number;
	overview: string;
	first_air_date: string;
	origin_country: string[];
	genre_ids: number[];
	original_language: string;
	vote_count: number;
	name: string;
	original_name: string;
}

export interface MoviesNowPlayingResponse {
	page: number;
	results: MovieListItem[];
	dates: DateRange;
	total_results: number;
	total_pages: number;
}

interface DateRange {
	maximum: string;
	minimum: string;
}

export interface MovieListItem {
	poster_path: string | null;
	adult: boolean;
	overview: string;
	release_date: string;
	genre_ids: number[];
	id: number;
	original_title: string;
	original_language: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
}

export interface MovieDetails {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection: null | object;
	budget: number;
	genres: Genre[];
	homepage: string | null;
	id: number;
	imdb_id: string | null;
	original_language: string;
	original_title: string;
	overview: string | null;
	popularity: number;
	poster_path: string | null;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number | null;
	spoken_languages: SpokenLanguage[];
	status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
	tagline: string | null;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface ProductionCompany { name: string, id: number };
interface ProductionCountry { iso_3166_1: string, name: string };
interface SpokenLanguage { iso_639_1: string, name: string };

export interface TvDetails {
	backdrop_path: string | null;
	created_by: Creator[];
	episode_run_time: number[];
	first_air_date: string;
	genres: Genre[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	name: string;
	networks: Network[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	production_companies: ProductionCompany[];
	seasons: Season[];
	status: 'Returning Series' | 'Planned' | 'In Production' | 'Ended' | 'Canceled' | 'Pilot';
	type: 'Scripted' | 'Reality' | 'Documentary' | 'News' | 'Talk Show' | 'Miniseries';
	vote_average: number;
	vote_count: number;
}

interface Creator {
	id: number;
	name: string;
	gender: number | null;
	profile_path: string;
};

interface Network { id: number; name: string; };

interface Season {
	air_date: string;
	episode_count: number;
	id: number;
	poster_path: string | null;
	season_number: number;
};