import React from 'react';
import './Popup.css';
import useClickOutside from '../../hooks/useClickOutside';
import { PopupData } from '../../hooks/useFetch';

type popupProps = {
  popupIsOpen: boolean;
  setPopupIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data?: PopupData;
};

const Popup: React.FC<popupProps> = (props) => {
  const popupClass = props.popupIsOpen ? `popup popup_opened` : `popup`;

  const popupRef = useClickOutside(() => {
    props.setPopupIsOpen(false);
  });

  return (
    <div className={popupClass}>
      <div ref={popupRef} className="popup__container">
        <button
          onClick={() => props.setPopupIsOpen(false)}
          className="popup__close-button popup__close-button_type_pic"
          type="button"
        ></button>
        <section className="popup__info-wrapper">
          <img src={props.data?.image_path} className="popup__pic" />
          <div className="popup__text-wrapper">
            <h2 className="popup__subtitle">{props.data?.name}</h2>
            <p className="popup__info">
              <span>Status:</span> {props.data?.status}
            </p>
            <p className="popup__info">
              <span>Rating:</span> {props.data?.rating}
            </p>
            <p className="popup__info">
              <span>Genres:</span> {props.data?.genres?.join(', ')}
            </p>
            <p className="popup__info">
              <span>Country:</span> {props.data?.country}
            </p>
            <p className="popup__info">
              <span>Network:</span> {props.data?.network}
            </p>
          </div>
        </section>
        <h3 className="popup__subtitle popup__subtitle-desc">Description</h3>
        <p className="popup__description">{props.data?.description}</p>
      </div>
    </div>
  );
};

export default Popup;
