import React, { useState } from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import ErrorMessage from '../atoms/ErrorMessage';

const FormField = ({ id, label, type = 'text', value, onChange, error }) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value !== '';

  return (
    <div className="mb-3 position-relative">
      <Label htmlFor={id} isActive={isActive}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <ErrorMessage message={error} />
    </div>
  );
};

export default FormField;
