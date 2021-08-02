import { SearchGithub } from '../models';

export const getLanguages = (searchResults: SearchGithub[]): string[] | any => {
  searchResults.reduce((acc: string[], item) => {
    if (!item.language || acc.includes(item.language)) {
      return acc;
    }

    acc.push(item.language);

    return acc;
  }, []);
};
