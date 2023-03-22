export const MOVIE_CATEGORIES: string[] = [
  'Action',
  'Adventure',
  'Drama',
  'Comedy',
  'Horror',
  'Fantasy',
  'Thriller',
  'Sci Fi',
];

export type OccasionOption = {
  value: string;
  label: string;
};

export const OCCASION_OPTIONS: OccasionOption[] = [
  { value: 'Date night', label: 'Date night' },
  { value: 'Hanging out with friends', label: 'Hanging out with friends' },
  { value: 'Studies', label: 'Studies' },
  { value: 'Watching solo', label: 'Watching solo' },
  { value: 'Family time', label: 'Family time' },
  { value: 'Watching with your kids', label: 'Watching with your kids' },
];
