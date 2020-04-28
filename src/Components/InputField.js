import React from 'react';
import {Input, ErrorMessage, ErrorStyle} from '../Styled/Container'
import InputContainer from './InputContainer'
import error from '../Images/error.svg'




/* class InputComponent extends React.Component{
    
       render(){
           return(
            <Input   
            name={this.props.name}
            type={this.props.type}
            // value={this.props.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange} />
           )
       }
    
} */

function InputField(props){
    return(
        <>
            <Input   
            name={props.name}
            type={props.type}
            value= {props.value}
            placeholder={props.placeholder}
            onChange={props.handleChange} 
            />
            <ErrorStyle> <img src ={error} alt ="error-icon"/></ErrorStyle>
            <ErrorMessage>  </ErrorMessage>
        </>
        )
}

export default InputField
