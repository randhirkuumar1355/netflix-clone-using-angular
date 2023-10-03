import { BelongsToCollection } from "./belongs-to-collection";
import { Genres } from "./genres";
import { ProductionCompanies } from "./production-companies";
import { ProductionCountries } from "./production-countries";
import { SpokenLanguages } from "./spoken-languages";

export class Movie {
    public id: number;
    public imdb_id: number;
    public adult: boolean;
    public backdrop_path: string;
    public budget: number;
    public belongs_to_collection: BelongsToCollection;
    public genres: Genres;
    public homepage: string;
    public original_language: string;
    public original_title: string;
    public overview: string;
    public popularity: number;
    public poster_path: string;
    public production_companies: ProductionCompanies;
    public production_countries: ProductionCountries;
    public release_date: string;
    public revenue: number;
    public runtime: number;
    public spoken_languages: SpokenLanguages;
    public status: string;
    public tagline: string;
    public title: string;
    public video: boolean;
    public vote_average: number;
    public vote_count: number;

    constructor() {
        this.id = 0;
        this.imdb_id = 0;
        this.adult = false;
        this.backdrop_path = '';
        this.budget = 0;
        this.belongs_to_collection = new BelongsToCollection();
        this.budget = 0;
        this.genres = new Genres();
        this.homepage = '';
        this.original_language = '';
        this.original_title = '';
        this.overview = '';
        this.popularity = 0;
        this.poster_path= '';
        this.production_companies = new ProductionCompanies();
        this.production_countries = new ProductionCountries();
        this.release_date = '';
        this.revenue = 0;
        this.runtime = 0;
        this.spoken_languages = new SpokenLanguages();
        this.status = '';;
        this.tagline= '';
        this.title= '';
        this.video = false;
        this.vote_average = 0;
        this.vote_count = 0;
    }
  }