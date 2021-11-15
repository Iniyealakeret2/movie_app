export interface VideosData {
  id: number;
  results: Result[];
}

export interface Result {
  iso_639_1?: ISO639_1;
  iso_3166_1?: ISO3166_1;
  name?: string;
  key?: string;
  site?: Site;
  size?: number;
  type?: Type;
  official?: boolean;
  published_at?: string;
  id?: string;
  backdrop_path?: string;
  popularity?: number;
}

export enum ISO3166_1 {
  Us = "US",
}

export enum ISO639_1 {
  En = "en",
}

export enum Site {
  YouTube = "YouTube",
}

export enum Type {
  Clip = "Clip",
  Featurette = "Featurette",
  Teaser = "Teaser",
  Trailer = "Trailer",
}
