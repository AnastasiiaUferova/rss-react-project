import React from 'react';
import './Popup.css';
import useClickOutside from '../../hooks/useClickOutside';
import { popupProps } from '../../types/types';

const Popup: React.FC<popupProps> = (props) => {
  const popupClass = props.popupIsOpen ? `popup popup_opened` : `popup`;

  const popupRef = useClickOutside(() => {
    props.setPopupIsOpen(false);
  });

  return (
    <div data-testid="popup" className={popupClass}>
      <div
        data-testid="popup-content"
        ref={popupRef}
        className="popup__container"
        aria-label="popup content"
      >
        <button
          onClick={() => props.setPopupIsOpen(false)}
          className="popup__close-button popup__close-button_type_pic"
          type="button"
          aria-label="close popup"
        ></button>
        {props.data ? (
          <>
            <section className="popup__info-wrapper">
              <img src={props.data.image_path} className="popup__pic" alt="popup picture" />
              <div className="popup__text-wrapper">
                <h2 className="popup__subtitle">{props.data.name}</h2>
                <p className="popup__info">
                  <span>Status:</span> {props.data.status}
                </p>
                <p className="popup__info">
                  <span>Rating:</span> {props.data.rating}
                </p>
                <p className="popup__info">
                  <span>Genres:</span> {props.data.genres?.join(', ') || ''}
                </p>
                <p className="popup__info">
                  <span>Country:</span> {props.data.country}
                </p>
                <p className="popup__info">
                  <span>Network:</span> {props.data.network}
                </p>
              </div>
            </section>
            <h3 className="popup__subtitle popup__subtitle-desc">Description</h3>
            <p className="popup__description">{props.data.description}</p>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Popup;
