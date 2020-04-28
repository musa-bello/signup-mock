class InputContainer extends React.Component{
    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        username: "",
        usernameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
      };
    
      handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value});
      };
    
      validate = () => {
        let isError = false;
        const errors = {
          firstNameError: "",
          lastNameError: "",
          usernameError: "",
          emailError: "",
          passwordError: ""
        };
        

        if (this.state.username.length < 5) {
          isError = true;
          errors.usernameError = "Username needs to be atleast 5 characters long";
        }
    
        if (this.state.email.indexOf("@") === -1) {
          isError = true;
          errors.emailError = "Requires valid email";
        }
    
        this.setState({
          ...this.state,
          ...errors
        });
    
        return isError;
      };
    
      handleSubmit = event => {
        event.preventDefault();
        // this.props.onSubmit(this.state);
        const err = this.validate();
        if (!err) {
          // clear form
          this.setState({
            firstName: "",
            firstNameError: "",
            lastName: "",
            lastNameError: "",
            username: "",
            usernameError: "",
            email: "",
            emailError: "",
            password: "",
            passwordError: ""
          });
        }
      };
    
      render() {
        return (
          <form>
            <InputComponent
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <ErrorMessage> {this.state.firstNameError}fghfghfghf </ErrorMessage>
            
            <InputComponent
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <ErrorMessage> {this.state.lastNameError} </ErrorMessage>
            
            <InputComponent
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <ErrorMessage> {this.state.usernameError} </ErrorMessage>
            
            <InputComponent
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
    
            />
            <ErrorMessage> {this.state.emailError} </ErrorMessage>
            
            <InputComponent
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            <ErrorMessage> {this.state.passwordError}</ErrorMessage>
            
            <SubmitButton onClick={this.handleSubmit}> CLAIM YOUR FREE TRIAL </SubmitButton>
          </form>
        );
      }
}