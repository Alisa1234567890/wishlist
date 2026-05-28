// Ce fichier est fourni complet — ne pas modifier

export interface Film {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

export interface TmdbResponse {
  page: number;
  results: Film[];
  total_results: number;
  total_pages: number;
}
