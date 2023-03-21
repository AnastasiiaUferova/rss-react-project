import Switcher from '../Switcher/Switcher';
import React, { Component } from 'react';
import './Form.css';

/*interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}*/

type FormState = {
  name: string;
  categories: object;
  date: '';
  occasion: string;
  image: '';
  recommended: boolean;
};

export default class Form extends Component {
  private nameRef = React.createRef<HTMLInputElement>();
  selectRefs = Array.from({ length: 10 }, () => React.createRef<HTMLInputElement>());

  state = {
    name: '',
    categories: {},
    date: '',
    occasion: '',
    image: '',
    recommended: false,
  };

  filterCategory = (obj: object) => {
    return Object.fromEntries(Object.entries(obj).filter(([, val]) => val === true));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(Object.keys(this.filterCategory(this.state.categories)));
  };

  handleNameChange = () => {
    if (this.nameRef.current) {
      this.setState({ name: this.nameRef.current.value });
    }
  };

  handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (this.selectRefs.some((ref) => ref.current?.checked)) {
      this.setState((prevState: FormState) => ({
        categories: {
          ...prevState.categories,
          [name]: checked,
        },
      }));
    } else {
      this.setState((prevState: FormState) => ({
        categories: {
          ...prevState.categories,
          [name]: false,
        },
      }));
    }
  };

  render() {
    const isValid = true;
    const ifDisabledClass = `${isValid ? `form__button` : `form__button form__button_disabled`}`;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1 className="form__title">Add your Movie</h1>
        <label className="form__item-text">Movie Name</label>
        <input
          ref={this.nameRef}
          onChange={this.handleNameChange}
          id="input_name"
          name="name"
          type="text"
          className="form__item-input"
        />
        <legend className="form__item-text">Film categories</legend>
        <fieldset className="form__item-input form__item-input_cat">
          {[
            'Action',
            'Adventure',
            'Drama',
            'Comedy',
            'Horror',
            'Fantasy',
            'Thriller',
            'Sci Fi',
          ].map((name, index) => (
            <label className="form-control" key={index}>
              <input
                ref={this.selectRefs[index]}
                onChange={this.handleCategoryChange}
                className="form__checkbox"
                type="checkbox"
                id={name}
                name={name}
              />
              {name}
            </label>
          ))}
        </fieldset>
        <label className="form__item-text">When I watched it</label>
        <input
          className="form__item-input"
          type="date"
          id="input_date"
          name="date"
          min="1900-01-01"
          max="2023-12-31"
        ></input>
        <label className="form__item-text">Occasion</label>
        <select id="input_occasion" className="form__item-input">
          <option className="form__item-input" value="Date night">
            Date night
          </option>
          <option className="form__item-input" value="Hanging out with friends">
            Hanging out with friends
          </option>
          <option className="form__item-input" value="Studies">
            Studies
          </option>
          <option className="form__item-input" value="Watching solo">
            Watching solo
          </option>
          <option className="form__item-input" value="Family time">
            Family time
          </option>
          <option className="form__item-input" value="Watching with your kids">
            Watching with your kids
          </option>
        </select>
        <label className="form__item-text">Cover Image</label>
        <input
          id="cover-image"
          type="file"
          name="cover-image"
          className="form__item-input form__item-input_img"
          accept="image/png, image/jpeg"
        />
        <label className="form__item-text">I recommend you to watch this film</label>
        <Switcher />
        <button className={ifDisabledClass} type="submit">
          Add Movie
        </button>
      </form>
    );
  }
}
