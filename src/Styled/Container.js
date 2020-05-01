import styled, { createGlobalStyle } from 'styled-components'
import desktopBg from '../Images/desktopBg.png'
import mobile from '../Images/mobile.png'


export const Globalstyle = createGlobalStyle `
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: repeat center URL(${desktopBg});
    background-size: cover;
    background-color: hsl(0, 100%, 74%);
    color: #fff;
    overflow-x: hidden;
      @media (max-width: 375px) {
        background: repeat center URL(${mobile});
        background-size: cover;
        background-color: hsl(0, 100%, 74%);
    }
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
  padding: 8rem 0 0 0;
  margin: auto;
  width: 60%;

  @media (max-width: 980px) {
    padding: 5rem 2rem 0 5rem;
  }

  @media (max-width: 375px) {
    text-align: center;
    margin: auto 0 auto -3rem;
    width: 80%;
    
  }
`;

export const Heading = styled.h1 `
  font-weight: 700;
  font-size: 2.5rem;
  @media (max-width: 375px) {  
    font-size: 1.6rem; 
  }
`;

export const ParagraphText = styled.p`
  font-size: .9rem;
  @media (max-width: 375px) {  
    font-size: .8rem; 
  }
`;

export const FormContent = styled.div`
  padding: 8rem 10rem 0 0rem;
  width: 50%;
  @media (max-width: 980px) {
    padding: 4rem 8rem;
  }

  @media (max-width: 375px) {
    margin: auto 0 auto -15rem;
    /* font-size: 20px; */
  }
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
  padding: 3rem 1rem;
  margin:2rem auto;
  width: 30rem;
  border-radius: 10px;
  box-shadow: 0px 10px 5px 1px rgba(0, 0, 0, .3);
  text-align: center;

  @media (max-width: 980px) {
    margin:1rem 2rem;
    width: 25rem;
  }

  @media (max-width: 780px) {
    margin:1rem -2rem;
  }

  @media (max-width: 680px) {
    width: 20rem;
  }

  @media (max-width: 375px) {
    margin:1rem 8rem;
    width: 15rem;
  }
`;

export const TopDiv = styled(FormDiv)`
  padding: 1rem;
  font-weight: lighter;
`;


export const SubmitButton = styled.button`
  display: block;
  cursor: pointer;
  width: 26rem;
  background: hsl(154, 59%, 51%);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, .3);
  color: #fff;
  padding: 10px 20px;
  margin: 1.5rem auto;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media (max-width: 980px) {
    width: 22.1rem;
  }

  @media (max-width: 680px) {
    width: 18.1rem;
  }

  @media (max-width: 375px) {
    width: 14.2rem;
    padding: 15px;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.div`
  color:hsl(0, 100%, 74%);
  text-align: right;
  margin: -.1rem 2rem -.8rem;
  font-size: 14px;
  font-style: italic;

  @media (max-width: 980px) {
    margin: -.1rem .95rem -.8rem;
  }

  @media (max-width: 375px) {
    margin: -.1rem 1rem -.8rem;
  }
`;

export const ErrorStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  height: 20px;
  right: 3rem;
  top: -2.1rem;
  
  @media (max-width: 980px) {
    right: 1.8rem;
  }
  
  @media (max-width: 375px) {
    right: 1.5rem;
  }
`;

export const TermsText = styled.p`
  color: hsl(246, 25%, 77%);
  font-size: .7rem;
  padding: 0 1.9rem;
  margin: -.5rem 0;
  @media (max-width: 375px) {
    padding: 0 .9rem;
    margin: -.9rem 0;
  }
`;

export const TermsSpan = styled.span`
  color: hsl(0, 100%, 74%);
  font-weight: 600;
`;