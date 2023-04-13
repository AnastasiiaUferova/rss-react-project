import React from 'react';
import './Popup.css';
import useClickOutside from '../../hooks/useClickOutside';
import { popupProps } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setIsPopupOpen } from '../../redux/slices/popupSlice';

const Popup: React.FC = (props) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.setIsOpenPopup.isPopupOpen);

  console.log(isOpen);

  const popupClass = isOpen ? `popup popup_opened` : `popup`;

  const popupRef = useClickOutside(() => {
    dispatch(setIsPopupOpen(false));
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
          onClick={() => dispatch(setIsPopupOpen(false))}
          className="popup__close-button popup__close-button_type_pic"
          type="button"
          aria-label="close popup"
        ></button>
      </div>
    </div>
  );
};

export default Popup;

/*  {props.data ? (
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
        */
