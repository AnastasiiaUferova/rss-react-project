import React from 'react';
import './Popup.css';

type popupProps = {
  popupIsOpen: boolean;
  setPopupIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Popup: React.FC<popupProps> = (props) => {
  const popupClass = props.popupIsOpen ? `popup popup_opened` : `popup`;
  return (
    <div className={popupClass}>
      <div className="popup__container">
        <button
          onClick={() => props.setPopupIsOpen(false)}
          className="popup__close-button popup__close-button_type_pic"
          type="button"
        ></button>
        <section className="popup__info-wrapper">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            className="popup__pic"
          />
          <div className="popup__text-wrapper">
            <h2 className="popup__subtitle">Doctor Who</h2>
            <p className="popup__info">
              <span>Runtime:</span> 60min
            </p>
            <p className="popup__info">
              <span>Rating:</span> 9.7
            </p>
            <p className="popup__info">
              <span>Genres:</span> Action, Fantasy, Mystery
            </p>
            <p className="popup__info">
              <span>Country:</span> UK
            </p>
            <p className="popup__info">
              <span>Network:</span> NBO
            </p>
          </div>
        </section>
        <h3 className="popup__subtitle popup__subtitle-desc">Description</h3>
        <p className="popup__description">
          Arrow is an American television series developed by writer/producers Greg Berlanti, Marc
          Guggenheim, and Andrew Kreisberg. It is based on the DC Comics character Green Arrow, a
          costumed crime-fighter created by Mort Weisinger and George Papp. It premiered in North
          America on The CW on October 10, 2012, with international broadcasting taking place in
          late 2012. Primarily filmed in Vancouver, British Columbia, Canada, the series follows
          billionaire playboy Oliver Queen, portrayed by Stephen Amell, who, five years after being
          stranded on a hostile island, returns home to fight crime and corruption as a secret
          vigilante whose weapon of choice is a bow and arrow. Unlike in the comic books, Queen does
          not go by the alias `&quot;Green Arrow`&quot;`. The series takes a realistic look at the
          Green Arrow character, as well as other characters from the DC Comics universe. Although
          Oliver Queen/Green Arrow had been featured in the television series Smallville from 2006
          to 2011, the producers decided to start clean and find a new actor (Amell) to portray the
          character. Arrow focuses on the humanity of Oliver Queen, and how he was changed by time
          spent shipwrecked on an island. Most episodes have flashback scenes to the five years in
          which Oliver was missing.
        </p>
      </div>
    </div>
  );
};

export default Popup;
