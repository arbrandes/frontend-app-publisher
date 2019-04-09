import React from 'react';
import PropTypes from 'prop-types';
import { InputText } from '@edx/paragon';

const RenderInputTextField = ({
  input,
  label,
  type,
  disabled,
  required,
  meta: { touched, error },
}) => (
  <InputText
    {...input}
    label={label}
    type={type}
    disabled={disabled}
    required={required}
    isValid={!(touched && error)}
    validationMessage={error}
    themes={['danger']}
  />
);

RenderInputTextField.defaultProps = {
  disabled: false,
  required: false,
};

RenderInputTextField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export default RenderInputTextField;