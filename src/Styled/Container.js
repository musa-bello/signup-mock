import styled, { createGlobalStyle } from 'styled-components'
import desktopBg from '../Images/desktopBg.png'
import error from '../Images/error.svg'


export const Globalstyle = createGlobalStyle `
@font-face {
  font-family: Poppins;
  src: url(https://fonts.google.com/specimen/Poppins);
}
  body {
    box-sizing: border-box;
    background: repeat center URL(${desktopBg});
    background-size: cover;
    background-color: hsl(0, 100%, 74%);
    
    color: #fff;
    font-family: Poppins;
  }
`;

export const Container = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1; 
`;

export const ContentText = styled.div`
  padding: 15rem 2rem 0 10rem;
  margin: 0 auto;

  @media (max-width: 375px) {
    padding: 9rem 2rem 0 3rem;
    font-size: 20px;
  }
`;

export const Heading = styled.h1 `
  font-weight: 700;
  font-size: 3rem;
`;

export const ParagraphText = styled.p`
  
`;

export const FormContent = styled(Column)`
    padding: 4rem 10rem 0 0rem;
  
`;

export const Input = styled.input` 
 
    width: 80%;
    font-size: 18px;
    padding: 10px 20px;
    margin: .4rem auto;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    ::placeholder {
        color: hsl(249, 10%, 26%);
    }
    :focus {
        outline: hsl(249, 10%, 26%);
        border: 1px solid hsl(249, 10%, 26%);
    }
    background-color: #fff;
    border: 1px solid hsl(246, 25%, 77%);
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const FormDiv = styled.div`
  background: ${props => props.bgColor || "hsl(248, 32%, 49%)"};
  padding: 1rem 2rem;
  margin:1rem auto;
  width: 30rem;
  border-radius: 10px;
  box-shadow: 0px 10px 5px 1px rgba(0, 0, 0, .3);
  text-align: center;

  @media (max-width: 980px) {
    margin:1rem 6rem;
    width: 20rem;
}
`;

export const SubmitButton = styled.button`
    display: block;
    width: 86%;
    background: hsl(154, 59%, 51%);
    color: #fff;
    padding: 10px 20px;
    margin: 1.5rem auto;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const ErrorMessage = styled.div`
    color:hsl(0, 100%, 74%);
    text-align: right;
    margin: -.8rem 2rem .4rem;
    font-size: 16px;
    font-style: italic;
`;

export const ErrorStyle = styled.div`
    display: none; 
    display: inline-flex;
    position: relative;
    right: 2rem;
    top: .3rem;
    
`;