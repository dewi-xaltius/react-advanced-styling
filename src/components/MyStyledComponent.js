import React from 'react';
import { StyledContainer, StyledButton, TomatoButton } from './MyStyledComponent.styles';

function MyStyledComponent() {
  return (
    <>
      <StyledContainer>
        Content here StyledComponent 
        using Styled-Component
        <StyledButton>Default</StyledButton>
        <StyledButton primary>Primary</StyledButton>
        <TomatoButton>Tomato</TomatoButton>
      </StyledContainer>;
    </>
  )
}

export default MyStyledComponent;
