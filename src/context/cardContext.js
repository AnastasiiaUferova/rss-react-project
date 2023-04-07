import { createContext } from 'react';
const cardContext = createContext({
  setSelectedCardId: () => {},
  setPopupIsOpen: () => {},
});
export default cardContext;
