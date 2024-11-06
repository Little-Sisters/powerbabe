import React from 'react';
import styled from 'styled-components';

// Define the interface with only a few props
interface CustomInputProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  width?: string;
}

// Styled input component
const StyledInput = styled.input<CustomInputProps>`
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  width: ${props => props.width || '100%'};
  font-size: 16px;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

// Reusable Input component
const CustomInputField: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder,
  width,
}) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      width={width}
    />
  );
};

export default CustomInputField;
