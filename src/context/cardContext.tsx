import { createContext } from 'react';
import { TvShow } from '../hooks/useFetch';

type cardContext = {
  selectedCardId?: string;
  setSelectedCardId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const cardContext = createContext<cardContext>({
  setSelectedCardId: () => {},
});

export default cardContext;
