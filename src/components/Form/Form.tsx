import Switcher from '../Switcher/Switcher';
import React, { Component } from 'react';
import { MOVIE_CATEGORIES, OCCASION_OPTIONS, OccasionOption } from '../../constants/constants';
import './Form.css';

/*interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}*/

type FormState = {
  name: string;
  categories: object;
  date: string;
  occasion: string;
  image: string;
  recommended: boolean;
};

export default class Form extends Component {
  private nameRef = React.createRef<HTMLInputElement>();
  selectRefs = Array.from({ length: 10 }, () => React.createRef<HTMLInputElement>());
  private dateRef = React.createRef<HTMLInputElement>();
  private occasionRef = React.createRef<HTMLSelectElement>();
  private fileRef = React.createRef<HTMLInputElement>();

  state = {
    name: '',
    categories: [],
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
    console.log(this.state);
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

  handleDateChange = () => {
    if (this.dateRef.current) {
      this.setState({ date: this.dateRef.current.value });
    }
  };

  handleOccasionChange = () => {
    if (this.occasionRef.current) {
      this.setState({ occasion: this.occasionRef.current.value });
    }
  };

  handleFileUpload = () => {
    if (this.fileRef.current) {
      const selectedImage = this.fileRef.current?.files?.[0];
      if (selectedImage) {
        const objectUrl = URL.createObjectURL(selectedImage);
        this.setState({ image: objectUrl });
      }
    }
  };

  componentWillUnmount() {
    if (this.state.image) {
      URL.revokeObjectURL(this.state.image);
    }
  }

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
          {MOVIE_CATEGORIES.map((name, index) => (
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
          ref={this.dateRef}
          className="form__item-input"
          onChange={this.handleDateChange}
          type="date"
          id="input_date"
          name="date"
          min="1900-01-01"
          max="2023-12-31"
        ></input>
        <label className="form__item-text">Occasion</label>
        <select
          value={this.state.occasion}
          id="input_occasion"
          className="form__item-input"
          ref={this.occasionRef}
          onChange={this.handleOccasionChange}
        >
          {OCCASION_OPTIONS.map((option: OccasionOption) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label className="form__item-text">Cover Image</label>
        <input
          ref={this.fileRef}
          onChange={this.handleFileUpload}
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
