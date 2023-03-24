import React, { Component } from 'react';
import { MOVIE_CATEGORIES } from '../../constants/constants';
import './Form.css';
import './Switcher.css';
import { nanoid } from 'nanoid';
import NameInput from './NameInput';
import CategoriesInput from './CategoriesInput';
import DateInput from './DateInput';
import OccasionInput from './OccasionInput';
import ImageInput from './ImageInput';
import RadioInput from './RadioInput';
import ConfirmMessage from '../ConfirmMessage/ConfirmMessage';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { validateForm } from '../../utils/validation';
export default class Form extends Component {
  nameRef;
  selectRefs;
  dateRef;
  occasionRef;
  fileRef;
  radioYesRef;
  radioNoRef;
  formRef;
  buttonRef;
  constructor(props) {
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
    this.nameRef = React.createRef();
    this.selectRefs = Array.from({ length: 10 }, () => React.createRef());
    this.dateRef = React.createRef();
    this.occasionRef = React.createRef();
    this.fileRef = React.createRef();
    this.radioYesRef = React.createRef();
    this.radioNoRef = React.createRef();
    this.formRef = React.createRef();
    this.buttonRef = React.createRef();
    this.handleSubmit.bind(this);
    this.handleNameChange.bind(this);
    this.handleCategoryChange.bind(this);
    this.handleDateChange.bind(this);
    this.handleOccasionChange.bind(this);
    this.handleFileUpload.bind(this);
    this.handleYesChange.bind(this);
    this.handleNoChange.bind(this);
  }
  handleSubmit = (event) => {
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
  };
  handleNameChange = () => {
    console.log(this.state.errors);
    console.log(!this.state.occasion || this.state.occasion === 'Choose occasion for the movie');
    if (this.nameRef.current) {
      this.setState({ name: this.nameRef.current.value });
    }
  };
  handleCategoryChange = () => {
    const filteredCategories = this.selectRefs
      .filter((ref) => ref.current && ref.current.checked)
      .map((ref) => ref.current && ref.current.name)
      .filter((name) => name !== undefined);
    this.setState({ categories: filteredCategories });
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
    return React.createElement(
      'form',
      { ref: this.formRef, className: 'form', onSubmit: this.handleSubmit, noValidate: true },
      React.createElement('h1', { className: 'form__title' }, 'Add your Movie'),
      React.createElement(NameInput, { ref: this.nameRef, onChange: this.handleNameChange }),
      React.createElement(ErrorMessage, { errorMessage: this.state.errors?.name }),
      React.createElement('legend', { className: 'form__item-text' }, 'Film categories'),
      React.createElement(
        'fieldset',
        { className: 'form__item-input form__item-input_cat' },
        MOVIE_CATEGORIES.map((name, index) =>
          React.createElement(CategoriesInput, {
            ref: this.selectRefs[index],
            name: name,
            key: index,
            onChange: this.handleCategoryChange,
          })
        )
      ),
      React.createElement(ErrorMessage, { errorMessage: this.state.errors?.categories }),
      React.createElement(DateInput, { ref: this.dateRef, onChange: this.handleDateChange }),
      React.createElement(ErrorMessage, { errorMessage: this.state.errors?.date }),
      React.createElement(OccasionInput, {
        ref: this.occasionRef,
        onChange: this.handleOccasionChange,
        occasion: this.state.occasion,
      }),
      React.createElement(ErrorMessage, { errorMessage: this.state.errors?.occasion }),
      React.createElement(ImageInput, { ref: this.fileRef, onChange: this.handleFileUpload }),
      React.createElement(ErrorMessage, { errorMessage: this.state.errors?.image }),
      React.createElement(
        'label',
        { className: 'form__item-text' },
        'I recommend you to watch this film'
      ),
      React.createElement(
        'div',
        { className: 'switch-field' },
        React.createElement(RadioInput, {
          onChange: this.handleYesChange,
          ref: this.radioYesRef,
          id: 'radio-one',
          value: 'yes',
          label: 'Yes',
          name: 'switch-one',
          checked: this.state.yesIsChecked,
        }),
        React.createElement(RadioInput, {
          onChange: this.handleNoChange,
          ref: this.radioNoRef,
          id: 'radio-two',
          value: 'no',
          label: 'No',
          name: 'switch-two',
          checked: this.state.noIsChecked,
        })
      ),
      this.state.isSubmitted && React.createElement(ConfirmMessage, null),
      React.createElement(
        'button',
        { ref: this.buttonRef, className: 'form__button', type: 'submit' },
        'Add Movie'
      )
    );
  }
}
