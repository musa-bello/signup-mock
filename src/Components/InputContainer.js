import React from 'react'
import InputField from './InputField'
import {SubmitButton, TermsText, TermsSpan} from '../Styled/Container'

class InputContainer extends React.Component {
    state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      errors: {},
      submitted: false
    };
  
    handleChange = event => {
      const { user } = this.state;
      user[event.target.name] = event.target.value;
      this.setState({ user });
    };
  
    onSubmit = () => {
      const {
        user: { firstName, lastName, email, password }
      } = this.state;
      let err = {};
  
      if (!firstName) {
        err.firstName = "First Name cannot be empty ";
      }

      if (!lastName) {
        err.lastName = "Last Name cannot be empty ";
      }

      /* if (!email) {
        err.email = "Email cannot be empty ";
      } */

        //regular expression for email validation
        var pattern = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i);
        if (!pattern.test(email)) {
          err.email = "Looks like this is not an email";
        }
      
      if (!password) {
        err.password = "Password cannot be empty ";
        /* if (password.length < 8) {
          err.password = "Password must be at least 8 characters!";
        } */
      }

      this.setState({ errors: err }, () => {
        if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
          this.setState({ submitted: true });
        }
      });
    };

  render() {
    const {
      submitted,
      errors,
      user: { firstName, lastName, email, password }
    } = this.state;

    return (
    <>
      {submitted ? (
            alert (`Welcome onboard, ${firstName} ${lastName}`)
          ) : (
            <>
              <InputField   
                name="firstName"
                type="text"
                value={firstName}
                placeholder="First Name"
                onChange={this.handleChange} 
                error={errors.firstName}
              />
              
              <InputField   
                name="lastName"
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={this.handleChange} 
                error = {errors.lastName}
              />
              
              <InputField   
                name="email"
                type="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
                error={errors.email} 
              />

              <InputField
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange} 
                error={errors.password}
              />

              <SubmitButton onClick={this.onSubmit}> CLAIM YOUR FREE TRIAL </SubmitButton>

              <TermsText>By clicking the button, you are agreeing to our <TermsSpan>Terms and Services</TermsSpan></TermsText>
            </>
        )}
        
    </>

      )
  }

}

export default InputContainer