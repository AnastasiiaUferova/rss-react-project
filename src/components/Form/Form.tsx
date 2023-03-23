import React, { Component } from 'react';
import { MOVIE_CATEGORIES } from '../../constants/constants';
import './Form.css';
import './Switcher.css';
import { nanoid } from 'nanoid';
import { CardProps } from '../Card/Card';
import NameInput from './NameInput';
import CategoriesInput from './CategoriesInput';
import DateInput from './DateInput';
import OccasionInput from './OccasionInput';
import ImageInput from './ImageInput';
import RadioInput from './RadioInput';
import ConfirmMessage from '../ConfirmMessage/ConfirmMessage';

interface FormProps {
  onAddCard: (card: FormState) => void;
}

type FormState = CardProps & {
  noIsChecked?: boolean;
  yesIsChecked?: boolean;
  isSubmitted?: boolean;
};

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
      noIsChecked: true,
      yesIsChecked: false,
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
    this.handleYesChange.bind(this);
    this.handleNoChange.bind(this);
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
    this.setState({ isSubmitted: true });
    setTimeout(() => {
      this.setState({ isSubmitted: false });
    }, 3000);
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

  handleYesChange = () => {
    this.setState({ recommended: true, noIsChecked: false, yesIsChecked: true });
  };

  handleNoChange = () => {
    this.setState({ recommended: false, noIsChecked: true, yesIsChecked: false });
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
        <DateInput ref={this.dateRef} onChange={this.handleDateChange} />
        <OccasionInput
          ref={this.occasionRef}
          onChange={this.handleOccasionChange}
          occasion={this.state.occasion}
        />
        <ImageInput ref={this.fileRef} onChange={this.handleFileUpload} />
        <label className="form__item-text">I recommend you to watch this film</label>
        <div className="switch-field">
          <RadioInput
            onChange={this.handleYesChange}
            ref={this.radioYesRef}
            id="radio-one"
            value="yes"
            label="Yes"
            name="switch-one"
            checked={this.state.yesIsChecked}
          />
          <RadioInput
            onChange={this.handleNoChange}
            ref={this.radioNoRef}
            id="radio-two"
            value="no"
            label="No"
            name="switch-two"
            checked={this.state.noIsChecked}
          />
        </div>
        {this.state.isSubmitted && <ConfirmMessage />}
        <button className={ifDisabledClass} type="submit">
          Add Movie
        </button>
      </form>
    );
  }
}
