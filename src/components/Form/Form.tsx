import React, { Component } from 'react';
import { MOVIE_CATEGORIES, OCCASION_OPTIONS, OccasionOption } from '../../constants/constants';
import './Form.css';
import './Switcher.css';
import { nanoid } from 'nanoid';
import { CardProps } from '../Card/Card';
import NameInput from './NameInput';
import CategoriesInput from './CategoriesInput';

interface FormProps {
  onAddCard: (card: FormState) => void;
}

type FormState = CardProps;

export default class Form extends Component<FormProps, FormState> {
  private nameRef: React.RefObject<HTMLInputElement>;
  private selectRefs: React.RefObject<HTMLInputElement>[];
  private dateRef: React.RefObject<HTMLInputElement>;
  private occasionRef: React.RefObject<HTMLSelectElement>;
  private fileRef: React.RefObject<HTMLInputElement>;
  private radioYesRef: React.RefObject<HTMLInputElement>;
  private radioNoRef: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.state = {
      id: nanoid(),
      name: '',
      categories: [],
      date: '',
      occasion: '',
      image: '',
      recommended: false,
    };
    this.nameRef = React.createRef<HTMLInputElement>();
    this.selectRefs = Array.from({ length: 10 }, () => React.createRef<HTMLInputElement>());
    this.dateRef = React.createRef<HTMLInputElement>();
    this.occasionRef = React.createRef<HTMLSelectElement>();
    this.fileRef = React.createRef<HTMLInputElement>();
    this.radioYesRef = React.createRef<HTMLInputElement>();
    this.radioNoRef = React.createRef<HTMLInputElement>();
    this.handleSubmit.bind(this);
    this.handleNameChange.bind(this);
    this.handleCategoryChange.bind(this);
    this.handleDateChange.bind(this);
    this.handleOccasionChange.bind(this);
    this.handleFileUpload.bind(this);
    this.handleRecChange.bind(this);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onAddCard({
      id: nanoid(),
      name: this.state.name,
      categories: Object.keys(this.state.categories),
      date: this.state.date,
      occasion: this.state.occasion,
      image: this.state.image,
      recommended: this.state.recommended,
    });
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

  handleRecChange = () => {
    if (this.radioYesRef.current?.checked) {
      this.setState({ recommended: true });
    } else if (this.radioNoRef.current?.checked) {
      this.setState({ recommended: false });
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
        <NameInput ref={this.nameRef} onChange={this.handleNameChange} />
        <legend className="form__item-text">Film categories</legend>
        <fieldset className="form__item-input form__item-input_cat">
          {MOVIE_CATEGORIES.map((name, index) => (
            <CategoriesInput
              ref={this.selectRefs[index]}
              name={name}
              key={index}
              onChange={this.handleCategoryChange}
            />
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
        <div className="switch-field">
          <input
            ref={this.radioYesRef}
            onChange={this.handleRecChange}
            defaultChecked
            type="radio"
            id="radio-one"
            name="switch-one"
            value="yes"
          />
          <label htmlFor="radio-one">Yes</label>
          <input
            onChange={this.handleRecChange}
            ref={this.radioNoRef}
            type="radio"
            id="radio-two"
            name="switch-one"
            value="no"
          />
          <label htmlFor="radio-two">No</label>
        </div>
        <button className={ifDisabledClass} type="submit">
          Add Movie
        </button>
      </form>
    );
  }
}
