export type CardProps = {
  id: string;
  image: string;
  name: string;
  recommended?: string;
  categories?: string[];
  date: string;
  occasion?: string;
};

export type finalType = CardProps;

export type popupProps = {
  popupIsOpen: boolean;
  setPopupIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: PopupData;
};

export interface SearchBoxProps {
  onQueryChange: (newQuery: string) => void;
  filterData?: ApiCardType[];
}

export type StringObject = { [key: string]: string };

export interface FormValues {
  name: string;
  date: string;
  occasion: string;
  categories: string[];
  image: string;
  recommended: string;
}

export interface FormState extends FormValues {
  id: string;
}

export interface FormProps {
  onAddCard: (card: FormState) => void;
}

export type ErrorProps = {
  errorMessage?: string;
};

export type ApiCardType = {
  id: string;
  image_thumbnail_path: string;
  name: string;
  start_date: string;
  network: string;
  country: string;
};

export interface TvShow {
  id: number;
  name: string;
  start_date: string;
  status: string;
  country: string;
  network: string;
  image_thumbnail_path: string;
}

export interface PopupData {
  name: string;
  description: string;
  network: string;
  status: string;
  country: string;
  image_path: string;
  rating: string;
  genres: string[];
}

export type CardsApiListProps = {
  cards?: ApiCardType[];
};

export type CardsListProps = {
  cards?: CardProps[];
};
