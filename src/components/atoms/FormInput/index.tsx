import React from 'react';
import { inputProps } from './form.types';
import classes from './FormInput.module.css';

export const FormInput = ({
  placeholder,
  htmlFor,
  type,
  label,
  rows,
  value,
  className,
  name,
  onChange,
}: inputProps) => {
  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        className={`${classes.input} ${className || ''}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
