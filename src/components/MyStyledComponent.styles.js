import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 20px;
  background-color: #03A9F4;
`;

export const StyledButton = styled.button`
  background: ${(props) => props.primary ? "palevioletred" : "white"};
  color: ${(props) => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const TomatoButton = styled(StyledButton)`
  color: tomato;
  border-color: tomato;
`