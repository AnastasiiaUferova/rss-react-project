import { SearchBar } from '../SearchBar/SearchBar';
import React, { FC, useState, useEffect } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import Popup from '../Popup/Popup';
import { ApiCardType, PopupData } from '../../types/types';
import { ApiCardsList } from '../ApiCardList/ApiCardList';
import { useGetAllCardsQuery, useGetFilteredCardsQuery } from '../../redux/slices/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setIsSubmitted } from '../../redux/slices/searchSlice';
import { setApiCards } from '../../redux/slices/apiCardsSlice';

export const Home: FC = () => {
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);
  const query = useSelector((state: RootState) => state.setQuery.query);
  const dispatch = useDispatch();
  const isSubmitted = useSelector((state: RootState) => state.setIsSubmitted.isSubmitted);
  const generalData = useSelector((state: RootState) => state.setApiCards.cards);

  const { data: cardsData, isLoading: isCardsLoading, isError } = useGetAllCardsQuery('');
  const { data: filterData, isLoading } = useGetFilteredCardsQuery(query, { skip: !isSubmitted });

  useEffect(() => {
    dispatch(setApiCards(cardsData?.tv_shows));
  }, [cardsData?.tv_shows, dispatch]);

  console.log(query && isSubmitted);
  console.log(isLoading);

  useEffect(() => {
    if (query && isSubmitted) {
      dispatch(setApiCards(filterData?.tv_shows));
    } else {
      dispatch(setApiCards(cardsData?.tv_shows));
    }
  }, [query, filterData?.tv_shows, dispatch, cardsData?.tv_shows, isSubmitted]);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setIsSubmitted(false));
    }
  }, [isLoading, dispatch]);

  const renderElements = () => {
    if (isError) return <ErrorMessage errorMessage="Something went wrong" />;
    else return <ApiCardsList cards={generalData} />;
  };

  return (
    <div className="home">
      <SearchBar />
      {(isLoading || isCardsLoading) && <Loader />}
      {renderElements()}
    </div>
  );
};

//<Popup popupIsOpen={popupIsOpen} setPopupIsOpen={setPopupIsOpen} />
