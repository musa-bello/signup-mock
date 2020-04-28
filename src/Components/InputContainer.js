import React from 'react'
import InputField from './InputField'
import {SubmitButton, ErrorMessage, ErrorStyle} from '../Styled/Container'
/* import {Input} from '../Styled/Container'
import styled from 'styled-components'
import error from '../Images/error.svg'
import { FaBeer } from 'react-icons/fa'; */


class InputContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(event) {
      let fields = this.state.fields;
      fields[event.target.name] = event.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["firstName"] = "";
          fields["lastName"] = "";
          fields["emailid"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["firstName"]) {
        formIsValid = false;
        errors["firstName"] = "*first Name cannot be empty";
      }

      if (typeof fields["firstName"] !== "undefined") {
        if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["firstName"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["lastName"]) {
        formIsValid = false;
        errors["lastName"] = "*last Name cannot be empty";
      }

      if (typeof fields["lastName"] !== "undefined") {
        if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["lastName"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*please enter your email";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Looks like this is not an email";
        }
      }

     

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <>
        
        
        <InputField   
        name="firstName"
        type="text"
        value={this.state.fields.firstName}
        placeholder="First Name"
        onChange={this.handleChange} 
        />
        <ErrorStyle />
        <ErrorMessage> {this.state.errors.firstName} </ErrorMessage>
        
        <InputField   
        name="lastName"
        type="text"
        value={this.state.fields.lastName}
        placeholder="Last Name"
        onChange={this.handleChange} 
        />
        <ErrorStyle />
        <ErrorMessage> {this.state.errors.lastName} </ErrorMessage>

        <InputField   
        name="emailid"
        type="email"
        value={this.state.fields.emailid}
        placeholder="Email"
        onChange={this.handleChange} 
        />
        <ErrorStyle />
        <ErrorMessage> {this.state.errors.emailid} </ErrorMessage>

        <InputField
        name="password"
        type="password"
        value={this.state.fields.password}
        placeholder="Password"
        onChange={this.handleChange} 
        />
        <ErrorStyle />
        <ErrorMessage> {this.state.errors.password} </ErrorMessage>
        
        <SubmitButton onClick={this.submituserRegistrationForm}> CLAIM YOUR FREE TRIAL </SubmitButton>
        

        
    
</>

      );
  }


}

export default InputContainer