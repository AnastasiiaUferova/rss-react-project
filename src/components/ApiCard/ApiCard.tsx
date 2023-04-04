import React, { FC } from 'react';
import '../Card/Card.css';

export type ApiCardProps = {
  id: string;
  image_thumbnail_path: string;
  name: string;
  start_date: string;
  network: string;
  country: string;
  status: string;
};

export const ApiCard: FC<ApiCardProps> = (props: ApiCardProps) => {
  const { name, image_thumbnail_path, start_date, country, network, status } = props;
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
        <p className="card__subtext card__subtext_category">{status}</p>
      </div>
    </div>
  );
};
