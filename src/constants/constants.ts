export const MOVIE_CATEGORIES: string[] = [
  'Action',
  'Adventure',
  'Drama',
  'Comedy',
  'Romance',
  'Horror',
  'Fantasy',
  'Mistery',
  'Sport',
  'Documentary',
  'Thriller',
  'Sci Fi',
  'For Kids',
  'Western',
];

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
