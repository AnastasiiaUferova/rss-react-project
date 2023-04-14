import { SearchBar } from '../SearchBar/SearchBar';
import React, { FC, useEffect } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import Popup from '../Popup/Popup';
import { ApiCardsList } from '../ApiCardList/ApiCardList';
import { useGetAllCardsQuery, useGetFilteredCardsQuery } from '../../redux/slices/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setIsSubmitted } from '../../redux/slices/searchSlice';
import { setApiCards } from '../../redux/slices/apiCardsSlice';

export const Home: FC = () => {
  const query = useSelector((state: RootState) => state.setQuery.query);
  const dispatch = useDispatch();
  const isSubmitted = useSelector((state: RootState) => state.setIsSubmitted.isSubmitted);
  const generalData = useSelector((state: RootState) => state.setApiCards.cards);

  const { data: cardsData, isLoading: isCardsLoading, isError } = useGetAllCardsQuery('');
  const {
    data: filterData,
    isLoading,
    isError: isFilterError,
  } = useGetFilteredCardsQuery(query, { skip: !isSubmitted });

  useEffect(() => {
    dispatch(setApiCards(cardsData?.tv_shows));
  }, [cardsData?.tv_shows, dispatch]);

  console.log(query);
  console.log(generalData);

  useEffect(() => {
    if (!query) {
      dispatch(setApiCards(cardsData?.tv_shows));
    } else {
      dispatch(setApiCards(filterData?.tv_shows));
    }
  }, [query, filterData?.tv_shows, dispatch, cardsData?.tv_shows, isSubmitted]);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setIsSubmitted(false));
    }
  }, [isLoading, dispatch]);

  const renderElements = () => {
    if (isError || isFilterError) return <ErrorMessage errorMessage="Something went wrong" />;
    else return <ApiCardsList cards={generalData} />;
  };

  return (
    <div className="home">
      <SearchBar />
      {(isLoading || isCardsLoading) && <Loader />}
      {renderElements()}
      <Popup />
    </div>
  );
};
