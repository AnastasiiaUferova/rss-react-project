import { createContext } from 'react';

type cardContext = {
  setSelectedCardId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPopupIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const cardContext = createContext<cardContext>({
  setSelectedCardId: () => {},
  setPopupIsOpen: () => {},
});

export default cardContext;
