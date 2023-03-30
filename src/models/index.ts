// Generated by https://quicktype.io

export interface Dog {
  breeds: DogBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface DogBreed {
  weight: Dimension;
  height: Dimension;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
}

export interface Dimension {
  imperial: string;
  metric: string;
}

export interface Cat {
  breeds: CatBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatBreed {
  weight: Dimension;
  id: string;
  name: string;
  cfa_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  cat_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  hypoallergenic: number;
}

export interface SelectedPage {
  selected: number;
}
export type Filter = 'dogs' | 'cats';

export interface Photo {
  id: string;
  src: string;
  width: number;
  height: number;
}

export interface FavouritePhoto {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: string;
  image: Image;
}

export interface Image {
  id: string;
  url: string;
}
