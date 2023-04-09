import { SearchBar } from '../SearchBar/SearchBar';
import React, { FC, useState, useEffect } from 'react';
import { URL, generalURL } from '../../constants/constants';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import Popup from '../Popup/Popup';
import cardContext from '../../context/cardContext';
import { ApiCardType, PopupData } from '../../types/types';
import { ApiCardsList } from '../ApiCardList/ApiCardList';
import axios from 'axios';

interface ApiError {
  message: string;
  status: number;
}

export const Home: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedCardId, setSelectedCardId] = useState<string>();
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);
  const [popupData, setPopupData] = useState<PopupData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const finalQuery = query || localStorage?.query;

  const [cards, setCards] = useState<ApiCardType[]>();

  const fetchData = (url: string) => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setCards(res.data.tv_shows);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (popupIsOpen) {
      axios
        .get(`${generalURL}/show-details?q=${selectedCardId}`)
        .then((res) => {
          setPopupData(res.data.tvShow);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => setLoading(false));
    }
  }, [popupIsOpen, selectedCardId]);

  useEffect(() => {
    if (!localStorage?.query && !query) {
      fetchData(URL);
    } else {
      fetchData(`${generalURL}/search?q=${finalQuery}`);
    }
  }, [finalQuery, query]);

  const handleQueryChange = (newQuery: string) => {
    if (newQuery) {
      setQuery(newQuery);
      axios
        .get(`${generalURL}/search?q=${finalQuery}`)
        .then((res) => {
          setCards(res.data.tv_shows);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => setLoading(false));
    } else return;
  };

  const renderElements = () => {
    if (error) return <ErrorMessage errorMessage={error?.message} />;
    else return <ApiCardsList cards={cards} />;
  };

  return (
    <>
      <cardContext.Provider value={{ setSelectedCardId, setPopupIsOpen }}>
        <div className="home">
          <SearchBar filterData={cards} onQueryChange={handleQueryChange} />
          {loading && <Loader />}
          {renderElements()}
          <Popup data={popupData} popupIsOpen={popupIsOpen} setPopupIsOpen={setPopupIsOpen} />
        </div>
      </cardContext.Provider>
    </>
  );
};
