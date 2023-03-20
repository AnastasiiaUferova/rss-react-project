import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  render() {
    const isValid = true;
    const ifDisabledClass = `${isValid ? `form__button` : `form__button form__button_disabled`}`;
    return (
      <form className="form">
        <h1 className="form__title">Add your Movie</h1>
        <label className="form__item-text">Movie Name</label>
        <input id="input_name" name="email" type="email" className="form__item-input" />

        <label className="form__item-text">Category</label>
        <input id="input_category" type="password" name="password" className="form__item-input" />

        <label className="form__item-text">When I watched it</label>
        <input id="input_date" type="password" name="password" className="form__item-input" />

        <label className="form__item-text">Occasion</label>
        <input id="input_occasion" type="password" name="password" className="form__item-input" />

        <label className="form__item-text">Cover Image</label>
        <input id="input_image" type="password" name="password" className="form__item-input" />

        <label className="form__item-text">Recommended</label>
        <input id="input_rec" type="password" name="password" className="form__item-input" />

        <button className={ifDisabledClass} type="submit">
          Add Movie
        </button>
      </form>
    );
  }
}
