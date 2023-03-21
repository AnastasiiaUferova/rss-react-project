import Switcher from '../Switcher/Switcher';
import React, { Component } from 'react';
import './Form.css';

/*interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}*/

type FormState = {
  name: string;
  categories: string[];
  date: '';
  occasion: string;
  image: '';
  recommended: boolean;
};

export default class Form extends Component {
  private inputRef = React.createRef<HTMLInputElement>();
  private selectRef = React.createRef<HTMLSelectElement>();
  state = {
    name: '',
    categories: [],
    date: '',
    occasion: '',
    image: '',
    recommended: false,
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(this.state.name);
    alert(this.state.categories);
  };

  handleInputChange = () => {
    if (this.inputRef.current) {
      this.setState({ name: this.inputRef.current.value });
    }
  };

  handleSelectChange = () => {
    if (this.selectRef.current) {
      this.setState({ select: this.selectRef.current.value });
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
          ref={this.inputRef}
          onChange={this.handleInputChange}
          id="input_name"
          name="name"
          type="text"
          className="form__item-input"
        />
        <legend className="form__item-text">Film categories</legend>
        <fieldset className="form__item-input form__item-input_cat">
          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Action" name="Action" />
            Action
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Adventure" name="Adventure" />
            Adventure
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Drama" name="Drama" />
            Drama
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Comedy" name="Comedy" />
            Comedy
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Horror" name="Horror" />
            Horror
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Fantasy" name="Fantasy" />
            Fantasy
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Mystery" name="Mystery" />
            Mystery
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Sport" name="Sport" />
            Sport
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Thriller" name="Thriller" />
            Thriller
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id=" Sci Fi" name="Sci Fi" />
            Sci Fi
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Documentary" name="Documentary" />
            Documentary
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="For Kids" name="For Kids" />
            For Kids
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Romance" name="Romance" />
            Romance
          </label>

          <label className="form-control">
            <input className="form__checkbox" type="checkbox" id="Western" name="Western" />
            Western
          </label>
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
