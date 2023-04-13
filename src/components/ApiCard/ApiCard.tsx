import React, { FC } from 'react';
import '../Card/Card.css';
import { ApiCardType } from '../../types/types';
import { setIsPopupOpen, setPopupData } from '../../redux/slices/popupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useGetCardQuery } from '../../redux/slices/apiSlice';

export const ApiCard: FC<ApiCardType> = (props: ApiCardType) => {
  const isOpen = useSelector((state: RootState) => state.setIsOpenPopup.isPopupOpen);
  const dispatch = useDispatch();
  const { data } = useGetCardQuery(props.id, { skip: !isOpen });
  console.log(data);
  const onClickHandle: () => void = () => {
    console.log(data);
    dispatch(setPopupData(data.tvShow));
    dispatch(setIsPopupOpen(true));
  };

  const { name, image_thumbnail_path, start_date, country, network } = props;
  return (
    <div data-testid="movie-card" className="card">
      <img className="card__pic" src={image_thumbnail_path} alt={`Picture of "${name}"`}></img>

      <div className="card__text-container">
        <p className="card__text">{name}</p>
        <p className="card__text card__text_category">{country}</p>
      </div>
      <div className="card__subtext-container">
        <div>
          <p className="card__subtext card__subtext_category">{network}</p>
          <p className="card__subtext">{start_date}</p>
        </div>
        <button onClick={onClickHandle} className="card__button_more">
          Details
        </button>
      </div>
    </div>
  );
};
