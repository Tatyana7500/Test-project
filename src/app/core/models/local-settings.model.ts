
export interface Filters {
  withDescription: boolean;
  selectedLanguage: string;
}

export interface UserLocalSettings {
  search: string;
  filters: Filters;
}
