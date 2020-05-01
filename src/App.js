import React from 'react';
import {
  Globalstyle, 
  Container, 
  Column,
  ContentText,
  Heading,
  ParagraphText,
  FormContent,
  FormDiv,
  TopDiv} from './Styled/Container';
  import InputContainer from './Components/InputContainer'
import './App.css';



function App() {
  return (
    <>
    <Globalstyle /> 
      <Container>
        <Column>
          <ContentText>
            <Heading>Learn to code by <br/>watching others</Heading>
            <ParagraphText>See how experienced developers solve
              problems in real-time. <br/>Watching scripted tutorials
              is great, but understanding how developers think is invaluable.
            </ParagraphText>
          </ContentText>
        </Column>

        <Column> 
          <FormContent>
            <TopDiv><strong>Try it free 7days</strong> then $20/mo. thereafter</TopDiv>
            <FormDiv bgColor="white">
              <InputContainer />
            </FormDiv>
          </FormContent>
        </Column> 
      </Container>
    </>
  );
}

export default App;
