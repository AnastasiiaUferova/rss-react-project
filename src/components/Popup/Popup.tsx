import React from 'react';
import './Popup.css';
import useClickOutside from '../../hooks/useClickOutside';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setIsPopupOpen } from '../../redux/slices/popupSlice';

const Popup: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.setIsOpenPopup.isPopupOpen);

  const popupData = useSelector((state: RootState) => state.setPopupData.data);

  const popupClass = isOpen ? `popup popup_opened` : `popup`;

  const popupRef = useClickOutside(() => {
    dispatch(setIsPopupOpen(false));
  });

  console.log(popupData);

  return (
    <div data-testid="popup" className={popupClass}>
      <div
        data-testid="popup-content"
        ref={popupRef}
        className="popup__container"
        aria-label="popup content"
      >
        {popupData ? (
          <>
            <section className="popup__info-wrapper">
              <img src={popupData?.image_path} className="popup__pic" alt="popup picture" />
              <div className="popup__text-wrapper">
                <h2 className="popup__subtitle">{popupData?.name}</h2>
                <p className="popup__info">
                  <span>Status:</span> {popupData?.status}
                </p>
                <p className="popup__info">
                  <span>Rating:</span> {popupData?.rating}
                </p>
                <p className="popup__info">
                  <span>Genres:</span> {popupData?.genres?.join(', ') || ''}
                </p>
                <p className="popup__info">
                  <span>Country:</span> {popupData?.country}
                </p>
                <p className="popup__info">
                  <span>Network:</span> {popupData?.network}
                </p>
              </div>
            </section>
            <h3 className="popup__subtitle popup__subtitle-desc">Description</h3>
            <p className="popup__description">{popupData?.description}</p>
          </>
        ) : (
          <div>Loading...</div>
        )}
        <button
          onClick={() => dispatch(setIsPopupOpen(false))}
          className="popup__close-button popup__close-button_type_pic"
          type="button"
          aria-label="close popup"
          data-testid="popup-close-button"
        ></button>
      </div>
    </div>
  );
};

export default Popup;
