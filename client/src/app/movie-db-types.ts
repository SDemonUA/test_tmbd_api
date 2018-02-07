export * from '../../../models/moviedbModels';

const Config = {
  'base_url': 'http://image.tmdb.org/t/p/',
  'secure_base_url': 'https://image.tmdb.org/t/p/',
  'backdrop_sizes': [
    'w300',
    'w780',
    'w1280',
    'original'
  ],
  'logo_sizes': [
    'w45',
    'w92',
    'w154',
    'w185',
    'w300',
    'w500',
    'original'
  ],
  'poster_sizes': [
    'w92',
    'w154',
    'w185',
    'w342',
    'w500',
    'w780',
    'original'
  ],
  'profile_sizes': [
    'w45',
    'w185',
    'h632',
    'original'
  ],
  'still_sizes': [
    'w92',
    'w185',
    'w300',
    'original'
  ]
};

export enum PosterSize {
  small = 'w92', medium = 'w342', big = 'w780', original = 'original'
}

export enum BackdropSize {
  small = 'w300', medium = 'w780', big = 'w1280', original = 'original'
}

export class UriHelper {
  static getPoster(path: string, size: PosterSize = PosterSize.small): string {
    return Config.base_url + size + path;
  }
  static getBackdrop(path: string, size: BackdropSize = BackdropSize.small): string {
    return Config.base_url + size + path;
  }
}

export interface Movie {
  id: number;
  video: boolean; // does this movie has attached videos (youtube trailers?)
  adult: boolean;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  popularity: number;
  release_date: string;
  genre_ids: number[];
  backdrop_path?: string;
  poster_path?: string;

  vote_count?: number;
  vote_average: number;
}

export interface TvShow {
  id: number;
  name: string;
  original_name: string;

  overview: string;
  popularity: number;

  first_air_date: string;
  genre_ids: number[];
  origin_country: string[];
  original_language: string;
  vote_count: number;
  vote_average: number;

  backdrop_path?: string;
  poster_path?: string;
}

export interface Genre {
  id: number;
  name: string;
}
