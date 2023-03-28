import React, { Component } from 'react';
import { MOVIE_CATEGORIES } from '../../constants/constants';
import './Form.css';
import './Switcher.css';
import { nanoid } from 'nanoid';
import { CardProps } from '../Card/Card';
import NameInput from './NameInput/NameInput';
import CategoriesInput from './CategoriesInput/CategoriesInput';
import DateInput from './DateInput/DateInput';
import OccasionInput from './OccasionInput/OccasionInput';
import ImageInput from './ImageInput/ImageInput';
import RadioInput from './RadioInput/RadioInput';
import ConfirmMessage from '../ConfirmMessage/ConfirmMessage';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { validateForm } from '../../utils/validation';

interface FormProps {
  onAddCard: (card: FormState) => void;
}

export type FormState = CardProps & {
  noIsChecked?: boolean;
  yesIsChecked?: boolean;
  isSubmitted?: boolean;
  errors?: { [key: string]: string };
  isValid?: boolean;
  isButtonDisabled?: boolean;
};

export default class Form extends Component<FormProps, FormState> {
  private nameRef: React.RefObject<HTMLInputElement>;
  private selectRefs: React.RefObject<HTMLInputElement>[];
  private dateRef: React.RefObject<HTMLInputElement>;
  private occasionRef: React.RefObject<HTMLSelectElement>;
  private fileRef: React.RefObject<HTMLInputElement>;
  private radioYesRef: React.RefObject<HTMLInputElement>;
  private radioNoRef: React.RefObject<HTMLInputElement>;
  private formRef: React.RefObject<HTMLFormElement>;
  private buttonRef: React.RefObject<HTMLButtonElement>;
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
      errors: {},
      isButtonDisabled: true,
    };
    this.nameRef = React.createRef<HTMLInputElement>();
    this.selectRefs = Array.from({ length: 14 }, () => React.createRef<HTMLInputElement>());
    this.dateRef = React.createRef<HTMLInputElement>();
    this.occasionRef = React.createRef<HTMLSelectElement>();
    this.fileRef = React.createRef<HTMLInputElement>();
    this.radioYesRef = React.createRef<HTMLInputElement>();
    this.radioNoRef = React.createRef<HTMLInputElement>();
    this.formRef = React.createRef<HTMLFormElement>();
    this.buttonRef = React.createRef<HTMLButtonElement>();
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
    const { errors, isValid } = validateForm(this.state);
    event.preventDefault();
    if (isValid) {
      this.props.onAddCard({
        id: nanoid(),
        name: this.state.name,
        categories: this.state.categories,
        date: this.state.date,
        occasion: this.state.occasion,
        image: this.state.image,
        recommended: this.state.recommended,
      });
      this.setState({ isSubmitted: true, errors: {} });
      this.handeFormReset();
      setTimeout(() => {
        this.setState({ isSubmitted: false });
      }, 3000);
    } else {
      this.setState({ errors, isValid });
    }
    this.handeFormReset();
  };

  handleNameChange: () => void = () => {
    if (this.nameRef.current) {
      this.setState({ name: this.nameRef.current.value });
    }
  };

  handleCategoryChange: () => void = () => {
    const filteredCategories = this.selectRefs
      .filter((ref) => ref?.current?.checked)
      .map((ref) => ref?.current?.name)
      .filter((name) => name !== undefined) as string[];

    this.setState((prevState) => ({
      ...prevState,
      categories: [...filteredCategories],
    }));
  };

  handleDateChange: () => void = () => {
    if (this.dateRef.current) {
      this.setState({ date: this.dateRef.current.value });
    }
  };

  handleOccasionChange: () => void = () => {
    if (this.occasionRef.current) {
      this.setState({ occasion: this.occasionRef.current.value });
    }
  };

  handleFileUpload: () => void = () => {
    if (this.fileRef.current) {
      const selectedImage = this.fileRef.current?.files?.[0];
      if (selectedImage) {
        const objectUrl = URL.createObjectURL(selectedImage);
        this.setState({ image: objectUrl });
      }
    }
  };

  handeFormReset: () => void = () => {
    if (this.formRef.current) {
      this.formRef.current.reset();
    }
    this.setState({
      name: '',
      date: '',
      occasion: '',
      categories: [],
      image: '',
      recommended: false,
    });

    Object.values(this.selectRefs).forEach((ref) => {
      if (ref.current) {
        ref.current.checked = false;
      }
    });
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
    return (
      <form ref={this.formRef} className="form" onSubmit={this.handleSubmit} noValidate>
        <h1 className="form__title">Add your Movie</h1>
        <NameInput ref={this.nameRef} onChange={this.handleNameChange} />
        <ErrorMessage errorMessage={this.state.errors?.name} />
        <legend className="form__item-text">Film categories</legend>
        <fieldset id="categories" className="form__item-input form__item-input_cat">
          {MOVIE_CATEGORIES.map((name, index) => (
            <CategoriesInput
              ref={this.selectRefs[index]}
              name={name}
              key={index}
              onChange={this.handleCategoryChange}
            />
          ))}
        </fieldset>
        <ErrorMessage errorMessage={this.state.errors?.categories} />
        <DateInput ref={this.dateRef} onChange={this.handleDateChange} />
        <ErrorMessage errorMessage={this.state.errors?.date} />
        <OccasionInput
          ref={this.occasionRef}
          onChange={this.handleOccasionChange}
          occasion={this.state.occasion}
        />
        <ErrorMessage errorMessage={this.state.errors?.occasion} />
        <ImageInput ref={this.fileRef} onChange={this.handleFileUpload} />
        <ErrorMessage errorMessage={this.state.errors?.image} />
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
        <button ref={this.buttonRef} className="form__button" type="submit">
          Add Movie
        </button>
      </form>
    );
  }
}
