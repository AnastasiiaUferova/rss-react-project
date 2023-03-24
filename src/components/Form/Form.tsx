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
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface FormProps {
  onAddCard: (card: FormState) => void;
}

type FormState = CardProps & {
  noIsChecked?: boolean;
  yesIsChecked?: boolean;
  isSubmitted?: boolean;
  errors?: { [key: string]: string };
  isValid?: boolean;
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
    };
    this.nameRef = React.createRef<HTMLInputElement>();
    this.selectRefs = Array.from({ length: 10 }, () => React.createRef<HTMLInputElement>());
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

  /*validate = (): { [key: string]: string } => {
    const errors: { [key: string]: string } = {};

    if (!this.state.name) {
      errors.name = 'Name is required';
    }

    if (Object.keys(this.state.categories).length === 0) {
      errors.categories = 'At least one category must be selected';
    }

    if (!this.state.date) {
      errors.date = 'Release date is required';
    }

    if (!this.state.occasion) {
      errors.occasion = 'Occasion is required';
    }

    if (!this.state.image) {
      errors.image = 'Image is required';
    }

    this.setState({ errors });

    return errors;
  };*/

  validateForm = (): boolean => {
    const { name, categories, date, image } = this.state;

    // check if name is filled
    if (!name.trim()) {
      this.setState((prevState: FormState) => ({
        errors: {
          ...prevState.errors,
          name: 'Please enter a name',
        },
      }));
    } else {
      this.setState((prevState: FormState) => ({
        errors: {
          ...prevState.errors,
          name: ' ',
        },
      }));
    }

    console.log(this.state.categories);

    // check if at least one category is selected
    if (categories.length === 0 || !categories) {
      this.setState((prevState: FormState) => ({
        errors: {
          ...prevState.errors,
          categories: 'Please select at least one category',
        },
      }));

      console.log(this.state.categories);
    } else {
      this.setState((prevState: FormState) => ({
        errors: {
          ...prevState.errors,
          categories: ' ',
        },
      }));
    }

    // check if image is uploaded
    if (!image) {
      this.setState((prevState: FormState) => ({
        errors: {
          ...prevState.errors,
          image: 'Please upload an image',
        },
        isValid: false,
      }));
    } else {
      this.setState((prevState: FormState) => ({
        errors: {
          ...prevState.errors,
          image: ' ',
        },
      }));
    }

    const d = new Date(date);

    if (d.getFullYear() > 2024 || d.getFullYear() < 1900) {
      this.setState((prevState: FormState) => ({
        errors: {
          ...prevState.errors,
          date: 'Please enter year between 1900 and 2024',
        },
      }));
    }

    if (date) {
      this.setState((prevState: FormState) => ({
        errors: {
          ...prevState.errors,
          date: 'Please enter a date',
        },
      }));
    }

    if (this.state.image && this.state.name && this.state.categories.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state.date);
    if (this.validateForm()) {
      this.props.onAddCard({
        id: nanoid(),
        name: this.state.name,
        categories: this.state.categories,
        date: this.state.date,
        occasion: this.state.occasion,
        image: this.state.image,
        recommended: this.state.recommended,
      });
      this.setState({ isSubmitted: true });
      this.handeFormReset();
      setTimeout(() => {
        this.setState({ isSubmitted: false });
      }, 3000);
    } else return;
  };

  handleNameChange = () => {
    if (this.nameRef.current) {
      this.setState({ name: this.nameRef.current.value });
    }
  };

  handleCategoryChange = () => {
    const filteredCategories = this.selectRefs
      .filter((ref) => ref.current && ref.current.checked)
      .map((ref) => ref.current && ref.current.name)
      .filter((name) => name !== undefined) as string[];

    this.setState({ categories: filteredCategories });
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

  handeFormReset = () => {
    if (this.formRef.current) {
      this.formRef.current.reset();
    }
    this.setState({
      name: '',
      categories: [],
      date: '',
      occasion: '',
      image: '',
      recommended: false,
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
    const isValid = true;
    const ifDisabledClass = `${isValid ? `form__button` : `form__button form__button_disabled`}`;
    return (
      <form ref={this.formRef} className="form" onSubmit={this.handleSubmit} noValidate>
        <h1 className="form__title">Add your Movie</h1>
        <NameInput ref={this.nameRef} onChange={this.handleNameChange} />
        <ErrorMessage errorMessage={this.state.errors?.name} />
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
        <ErrorMessage errorMessage={this.state.errors?.categories} />
        <DateInput ref={this.dateRef} onChange={this.handleDateChange} />
        <ErrorMessage errorMessage={this.state.errors?.date} />
        <OccasionInput
          ref={this.occasionRef}
          onChange={this.handleOccasionChange}
          occasion={this.state.occasion}
        />
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
        <button ref={this.buttonRef} className={ifDisabledClass} type="submit">
          Add Movie
        </button>
      </form>
    );
  }
}

//  <ErrorMessage  isValid={isValid} text={errors.email}/>

/*  console.log(this.state.errors && Object.values(this.state.errors).every((item) => item === ''));
    if (this.state.errors && Object.values(this.state.errors).every((item) => item === '')) {
      this.setState(() => ({
        isValid: true,
      }));
      console.log(this.state.errors);
    } else {
      this.setState(() => ({
        isValid: false,
      }));
      console.log(this.state.errors);
    }
  }*/
