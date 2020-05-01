import React from 'react';
import {Input, ErrorMessage, ErrorStyle} from '../Styled/Container'
import errorIcon from '../Images/errorIcon.svg'

const InputField = ({
    name,
    type,
    placeholder,
    onChange,
    value,
    error,
    ...props
  }) => {
    
    return (
      <React.Fragment>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          style={error && {borderColor: 'hsl(0, 100%, 74%)'}}
        />
        { error && <ErrorMessage>{ error }</ErrorMessage>}
        { error && <ErrorStyle> <img src ={errorIcon} alt ="error-icon"/></ErrorStyle> }
      </React.Fragment>
    )
  }

export default InputField
