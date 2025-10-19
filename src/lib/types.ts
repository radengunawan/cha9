// src/lib/types.ts
export type ISODate = string;

export interface Movie {
  id: number;
  title: string;
  name?: string; // some endpoints return 'name'
  overview?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: ISODate;
  vote_average?: number;
  runtime?: number;
}

export interface Paginated<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Video {
  id: string;
  key: string; // e.g. YouTube video key
  name: string;
  site: 'YouTube' | 'Vimeo' | string;
  type: 'Trailer' | 'Teaser' | string;
}

export interface VideosResponse {
  id: number;
  results: Video[];
}
