export const MOVIE_CATEGORIES: CheckboxOption[] = [
  { label: 'Action', value: 'Action' },
  { label: 'Adventure', value: 'Adventure' },
  { label: 'Drama', value: 'Drama' },
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Romance', value: 'Romance' },
  { label: 'Horror', value: 'Horror' },
  { label: 'Fantasy', value: 'Fantasy' },
  { label: 'Mistery', value: 'Mistery' },
  { label: 'Sport', value: 'Sport' },
  { label: 'Documentary', value: 'Documentary' },
  { label: 'Thriller', value: 'Thriller' },
  { label: 'Sci Fi', value: 'Sci Fi' },
  { label: 'For Kids', value: 'For Kids' },
  { label: 'Western', value: 'Western' },
];

interface CheckboxOption {
  label: string;
  value: string;
}

export type OccasionOption = {
  value: string;
  label: string;
};

export const OCCASION_OPTIONS: OccasionOption[] = [
  { value: 'Choose occasion for the movie', label: 'Choose occasion for the movie' },
  { value: 'Date night', label: 'Date night' },
  { value: 'Hanging out with friends', label: 'Hanging out with friends' },
  { value: 'Studies', label: 'Studies' },
  { value: 'Watching solo', label: 'Watching solo' },
  { value: 'Family time', label: 'Family time' },
  { value: 'Watching with your kids', label: 'Watching with your kids' },
];

export const URL = `https://www.episodate.com/api/most-popular?page=1`;
export const generalURL = 'https://www.episodate.com/api';
