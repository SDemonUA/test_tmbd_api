/* tslint:disable */
import { Controller, ValidateParam, FieldErrors, ValidateError, TsoaRoute } from 'tsoa';
import { MovieDBcontroller } from './controllers/moviedbController';

const models: TsoaRoute.Models = {
    "MovieListItem": {
        "properties": {
            "poster_path": { "dataType": "object", "required": true },
            "adult": { "dataType": "boolean", "required": true },
            "overview": { "dataType": "string", "required": true },
            "release_date": { "dataType": "string", "required": true },
            "genre_ids": { "dataType": "array", "array": { "dataType": "double" }, "required": true },
            "id": { "dataType": "double", "required": true },
            "original_title": { "dataType": "string", "required": true },
            "original_language": { "dataType": "string", "required": true },
            "title": { "dataType": "string", "required": true },
            "backdrop_path": { "dataType": "object", "required": true },
            "popularity": { "dataType": "double", "required": true },
            "vote_count": { "dataType": "double", "required": true },
            "video": { "dataType": "boolean", "required": true },
            "vote_average": { "dataType": "double", "required": true },
        },
    },
    "DateRange": {
        "properties": {
            "maximum": { "dataType": "string", "required": true },
            "minimum": { "dataType": "string", "required": true },
        },
    },
    "MoviesNowPlayingResponse": {
        "properties": {
            "page": { "dataType": "double", "required": true },
            "results": { "dataType": "array", "array": { "ref": "MovieListItem" }, "required": true },
            "dates": { "ref": "DateRange", "required": true },
            "total_results": { "dataType": "double", "required": true },
            "total_pages": { "dataType": "double", "required": true },
        },
    },
    "Genre": {
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
        },
    },
    "ProductionCompany": {
        "properties": {
            "name": { "dataType": "string", "required": true },
            "id": { "dataType": "double", "required": true },
        },
    },
    "ProductionCountry": {
        "properties": {
            "iso_3166_1": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
        },
    },
    "SpokenLanguage": {
        "properties": {
            "iso_639_1": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
        },
    },
    "MovieDetails": {
        "properties": {
            "adult": { "dataType": "boolean", "required": true },
            "backdrop_path": { "dataType": "object", "required": true },
            "belongs_to_collection": { "dataType": "object", "required": true },
            "budget": { "dataType": "double", "required": true },
            "genres": { "dataType": "array", "array": { "ref": "Genre" }, "required": true },
            "homepage": { "dataType": "object", "required": true },
            "id": { "dataType": "double", "required": true },
            "imdb_id": { "dataType": "object", "required": true },
            "original_language": { "dataType": "string", "required": true },
            "original_title": { "dataType": "string", "required": true },
            "overview": { "dataType": "object", "required": true },
            "popularity": { "dataType": "double", "required": true },
            "poster_path": { "dataType": "object", "required": true },
            "production_companies": { "dataType": "array", "array": { "ref": "ProductionCompany" }, "required": true },
            "production_countries": { "dataType": "array", "array": { "ref": "ProductionCountry" }, "required": true },
            "release_date": { "dataType": "string", "required": true },
            "revenue": { "dataType": "double", "required": true },
            "runtime": { "dataType": "object", "required": true },
            "spoken_languages": { "dataType": "array", "array": { "ref": "SpokenLanguage" }, "required": true },
            "status": { "dataType": "enum", "enums": ["Rumored", "Planned", "In Production", "Post Production", "Released", "Canceled"], "required": true },
            "tagline": { "dataType": "object", "required": true },
            "title": { "dataType": "string", "required": true },
            "video": { "dataType": "boolean", "required": true },
            "vote_average": { "dataType": "double", "required": true },
            "vote_count": { "dataType": "double", "required": true },
        },
    },
    "TvListItem": {
        "properties": {
            "poster_path": { "dataType": "object", "required": true },
            "popularity": { "dataType": "double", "required": true },
            "id": { "dataType": "double", "required": true },
            "backdrop_path": { "dataType": "object", "required": true },
            "vote_average": { "dataType": "double", "required": true },
            "overview": { "dataType": "string", "required": true },
            "first_air_date": { "dataType": "string", "required": true },
            "origin_country": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
            "genre_ids": { "dataType": "array", "array": { "dataType": "double" }, "required": true },
            "original_language": { "dataType": "string", "required": true },
            "vote_count": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "original_name": { "dataType": "string", "required": true },
        },
    },
    "TvOnAirResponse": {
        "properties": {
            "page": { "dataType": "double", "required": true },
            "results": { "dataType": "array", "array": { "ref": "TvListItem" }, "required": true },
            "total_results": { "dataType": "double", "required": true },
            "total_pages": { "dataType": "double", "required": true },
        },
    },
    "Creator": {
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "gender": { "dataType": "object", "required": true },
            "profile_path": { "dataType": "string", "required": true },
        },
    },
    "Network": {
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
        },
    },
    "Season": {
        "properties": {
            "air_date": { "dataType": "string", "required": true },
            "episode_count": { "dataType": "double", "required": true },
            "id": { "dataType": "double", "required": true },
            "poster_path": { "dataType": "object", "required": true },
            "season_number": { "dataType": "double", "required": true },
        },
    },
    "TvDetails": {
        "properties": {
            "backdrop_path": { "dataType": "object", "required": true },
            "created_by": { "dataType": "array", "array": { "ref": "Creator" }, "required": true },
            "episode_run_time": { "dataType": "array", "array": { "dataType": "double" }, "required": true },
            "first_air_date": { "dataType": "string", "required": true },
            "genres": { "dataType": "array", "array": { "ref": "Genre" }, "required": true },
            "homepage": { "dataType": "string", "required": true },
            "id": { "dataType": "double", "required": true },
            "in_production": { "dataType": "boolean", "required": true },
            "languages": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
            "last_air_date": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "networks": { "dataType": "array", "array": { "ref": "Network" }, "required": true },
            "number_of_episodes": { "dataType": "double", "required": true },
            "number_of_seasons": { "dataType": "double", "required": true },
            "origin_country": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
            "original_language": { "dataType": "string", "required": true },
            "original_name": { "dataType": "string", "required": true },
            "overview": { "dataType": "string", "required": true },
            "popularity": { "dataType": "double", "required": true },
            "poster_path": { "dataType": "object", "required": true },
            "production_companies": { "dataType": "array", "array": { "ref": "ProductionCompany" }, "required": true },
            "seasons": { "dataType": "array", "array": { "ref": "Season" }, "required": true },
            "status": { "dataType": "enum", "enums": ["Returning Series", "Planned", "In Production", "Ended", "Canceled", "Pilot"], "required": true },
            "type": { "dataType": "enum", "enums": ["Scripted", "Reality", "Documentary", "News", "Talk Show", "Miniseries"], "required": true },
            "vote_average": { "dataType": "double", "required": true },
            "vote_count": { "dataType": "double", "required": true },
        },
    },
    "GenresResponse": {
        "properties": {
            "genres": { "dataType": "array", "array": { "ref": "Genre" }, "required": true },
        },
    },
    "SearchResponse": {
        "properties": {
            "page": { "dataType": "double", "required": true },
            "total_pages": { "dataType": "double", "required": true },
            "total_results": { "dataType": "double", "required": true },
            "total_results_tv": { "dataType": "double", "required": true },
            "total_results_movie": { "dataType": "double", "required": true },
            "total_pages_tv": { "dataType": "double", "required": true },
            "total_pages_movie": { "dataType": "double", "required": true },
            "movies": { "dataType": "array", "array": { "ref": "MovieListItem" }, "required": true },
            "tv": { "dataType": "array", "array": { "ref": "TvListItem" }, "required": true },
        },
    },
};

export function RegisterRoutes(app: any) {
    app.get('/v1/moviedb/now_playing',
        function(request: any, response: any, next: any) {
            const args = {
                page: { "default": 1, "in": "query", "name": "page", "dataType": "double" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new MovieDBcontroller();


            const promise = controller.getNowPlayingMovies.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/v1/moviedb/movie/:id',
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new MovieDBcontroller();


            const promise = controller.getMovieDetails.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/v1/moviedb/tv_ongoing',
        function(request: any, response: any, next: any) {
            const args = {
                page: { "default": 1, "in": "query", "name": "page", "dataType": "double" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new MovieDBcontroller();


            const promise = controller.getTvOnTheAir.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/v1/moviedb/tv/:id',
        function(request: any, response: any, next: any) {
            const args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new MovieDBcontroller();


            const promise = controller.getTvDetails.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/v1/moviedb/genres',
        function(request: any, response: any, next: any) {
            const args = {
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new MovieDBcontroller();


            const promise = controller.getGenres.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/v1/moviedb/search',
        function(request: any, response: any, next: any) {
            const args = {
                query: { "in": "query", "name": "query", "required": true, "dataType": "string" },
                page: { "default": 1, "in": "query", "name": "page", "dataType": "double" },
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new MovieDBcontroller();


            const promise = controller.search.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, next);
        });
    app.get('/v1/moviedb/*',
        function(request: any, response: any, next: any) {
            const args = {
            };

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new MovieDBcontroller();


            const promise = controller.error404.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, next);
        });


    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode;
                if (isController(controllerObj)) {
                    const headers = controllerObj.getHeaders();
                    Object.keys(headers).forEach((name: string) => {
                        response.set(name, headers[name]);
                    });

                    statusCode = controllerObj.getStatus();
                }

                if (data || data === false) { // === false allows boolean result
                    response.status(statusCode || 200).json(data);
                } else {
                    response.status(statusCode || 204).end();
                }
            })
            .catch((error: any) => next(error));
    }

    function getValidatedArgs(args: any, request: any): any[] {
        const fieldErrors: FieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return ValidateParam(args[key], request.query[name], models, name, fieldErrors);
                case 'path':
                    return ValidateParam(args[key], request.params[name], models, name, fieldErrors);
                case 'header':
                    return ValidateParam(args[key], request.header(name), models, name, fieldErrors);
                case 'body':
                    return ValidateParam(args[key], request.body, models, name, fieldErrors, name + '.');
                case 'body-prop':
                    return ValidateParam(args[key], request.body[name], models, name, fieldErrors, 'body.');
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }
}
