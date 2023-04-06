import React, { FC, useState } from 'react';
import { MOVIE_CATEGORIES, OccasionOption, OCCASION_OPTIONS } from '../../constants/constants';
import './Form.css';
import './Switcher.css';
import { nanoid } from 'nanoid';
import { ConfirmMessage } from '../ConfirmMessage/ConfirmMessage';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useForm, Controller } from 'react-hook-form';
import { registerOptions } from '../../utils/validationRules';
import { FormProps, FormValues } from '../../types/types';

const Form: FC<FormProps> = ({ onAddCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormValues>();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit = (data: FormValues) => {
    onAddCard({ ...data, id: nanoid() });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="form__title">Add your Show</h1>
      <label htmlFor="input_name" className="form__item-text">
        Show Name
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

      <legend className="form__item-text">Show categories</legend>
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

      <label className="form__item-text">I recommend you to watch this show</label>
      <div className="switch-field">
        <input
          {...register('recommended')}
          checked={true}
          type="radio"
          id="radio-one"
          value="yes"
        />
        <label htmlFor="radio-one">Yes</label>
        <input {...register('recommended')} type="radio" id="radio-two" value="no" />
        <label htmlFor="radio-two">No</label>
      </div>

      {isSubmitted && <ConfirmMessage />}

      <button className="form__button" type="submit">
        Add movie
      </button>
    </form>
  );
};

export default Form;
