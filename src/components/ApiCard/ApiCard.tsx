import React, { FC, useContext } from 'react';
import '../Card/Card.css';
import cardContext from '../../context/cardContext';
import { ApiCardType } from '../../types/types';

export const ApiCard: FC<ApiCardType> = (props: ApiCardType) => {
  const { setSelectedCardId, setPopupIsOpen } = useContext(cardContext);

  const onClickHandle: () => void = () => {
    setSelectedCardId(props.id);
    setPopupIsOpen(true);
  };

  const { name, image_thumbnail_path, start_date, country, network } = props;
  return (
    <div className="card">
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
