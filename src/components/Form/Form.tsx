import React, { FC, useState } from 'react';
import {
  MOVIE_CATEGORIES,
  OccasionOption,
  OCCASION_OPTIONS,
  RADIO_OPTIONS,
} from '../../constants/constants';
import './Form.css';
import './Switcher.css';
import { nanoid } from 'nanoid';
import { CardProps } from '../Card/Card';
import CategoriesInput from './CategoriesInput/CategoriesInput';
import DateInput from './DateInput/DateInput';
import OccasionInput from './OccasionInput/OccasionInput';
import ImageInput from './ImageInput/ImageInput';
import RadioInput from './RadioInput/RadioInput';
import { ConfirmMessage } from '../ConfirmMessage/ConfirmMessage';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useForm, Controller } from 'react-hook-form';
import { registerOptions } from '../../utils/validationRules';

export interface FormValues {
  name: string;
  date: string;
  occasion: string;
  categories: string[];
  image: string;
  recommended: '';
}

type FormState = FormValues & {
  id: string;
};

interface FormProps {
  onAddCard?: (card: FormState) => void;
}

const Form: FC<FormProps> = ({ props: FormProps }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    props.onAddCard({
      id: nanoid(),
      name: this.state.name,
      categories: this.state.categories,
      date: this.state.date,
      occasion: this.state.occasion,
      image: this.state.image,
      recommended: this.state.recommended,
    });
    console.log(data);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="form__title">Add your Movie</h1>
      <label htmlFor="input_name" className="form__item-text">
        Movie Name
      </label>
      <input
        {...register('name', registerOptions.name)}
        id="input_name"
        name="name"
        type="text"
        className="form__item-input"
      />
      <ErrorMessage errorMessage={errors?.name && errors.name.message} />

      <label htmlFor="input_date" className="form__item-text">
        Release Date
      </label>
      <input
        className="form__item-input"
        {...register('date', registerOptions.date)}
        type="date"
        id="input_date"
        name="date"
        min="1900-01-01"
        max="2024-01-31"
      ></input>
      <ErrorMessage errorMessage={errors?.date && errors.date.message} />

      <legend className="form__item-text">Film categories</legend>
      <Controller
        name="categories"
        control={control}
        rules={{ required: 'Please choose at least one category' }}
        defaultValue={[]}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <fieldset id="categories" className="form__item-input form__item-input_cat">
              {MOVIE_CATEGORIES.map((category) => (
                <label className="form-control" key={category.value} htmlFor={category.value}>
                  <input
                    className="form__checkbox"
                    name={category.value}
                    type="checkbox"
                    value={category.value}
                    onChange={(e) => {
                      const val = e.target.value;
                      const updatedValue = value.includes(val)
                        ? value.filter((v: string) => v !== val)
                        : [...value, val];
                      onChange(updatedValue);
                    }}
                    checked={value.includes(category.value)}
                  />
                  {category.label}
                </label>
              ))}
            </fieldset>
            <ErrorMessage errorMessage={error && error.message} />
          </>
        )}
      />

      <label htmlFor="input_occasion" className="form__item-text">
        Occasion
      </label>
      <select
        {...register('occasion', registerOptions.occasion)}
        id="input_occasion"
        className="form__item-input"
      >
        {OCCASION_OPTIONS.map((option: OccasionOption) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage errorMessage={errors?.occasion && errors.occasion.message} />

      <label htmlFor="image" className="form__item-text">
        Cover Image
      </label>
      <Controller
        rules={{ required: 'Please choose an image' }}
        name="image"
        control={control}
        defaultValue=""
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <input
              type="file"
              id="cover-image"
              className="form__item-input form__item-input_img"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                if (e.target.files) {
                  const file = e.target.files[0];
                  if (file) {
                    onChange(URL.createObjectURL(file));
                  }
                }
              }}
            />
            <ErrorMessage errorMessage={error && error.message} />
          </>
        )}
      />

      <label className="form__item-text">I recommend you to watch this film</label>
      <div className="switch-field">
        <input {...register('recommended')} type="radio" id="radio-one" value="yes" />
        <label htmlFor="radio-one">Yes</label>
        <input {...register('recommended')} type="radio" id="radio-two" value="no" />
        <label htmlFor="radio-two">No</label>
      </div>

      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
/*


      <legend className="form__item-text">Film categories</legend>
     




   




interface FormProps {
  onAddCard?: (card: FormState) => void;
}

export type FormState = CardProps & {
  noIsChecked?: boolean;
  yesIsChecked?: boolean;
  isSubmitted?: boolean;
  errors?: { [key: string]: string };
  isValid?: boolean;
};

interface FormValues {
  name: string;
  password: number;
}

const Form: FC<FormProps> = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className="form" noValidate>
      <h1 className="form__title">Add your Movie</h1>
      <NameInput label="name" name="name" />
      <NameInput label="password" name="password" />
      {isSubmitted && <ConfirmMessage />}
      <button className="form__button" type="submit">
        Add Movie
      </button>
    </form>
  );
};

export default Form;



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

 this.formRef = React.createRef<HTMLFormElement>();
    this.handleSubmit.bind(this);
    this.handleNameChange.bind(this);
    this.handleCategoryChange.bind(this);
    this.handleDateChange.bind(this);
    this.handleOccasionChange.bind(this);
    this.handleFileUpload.bind(this);
    this.handleYesChange.bind(this);
    this.handleNoChange.bind(this);




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

*/
