import styled, { keyframes } from 'styled-components';

interface IProps {
  isError: string | undefined;
}

interface IPropsRadio {
  inputColor?: string;
}

let bounce = keyframes`
  0% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
  37% {
    transform: translateX(5px);
    timing-function: ease-out;
  }
  55% {
    transform: translateX(-5px);
    timing-function: ease-in;
  }
  73% {
    transform: translateX(4px);
    timing-function: ease-out;
  }
  82% {
    transform: translateX(-4px);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(2px);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-2px);
    timing-function: ease-in;
  }
  100% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
`;

let fixed = keyframes``;

export const Container = styled.div<IProps>`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  padding: 0.8rem;

  label {
    margin-bottom: 0.4rem;
  }
  input {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 30px;
    font-size: 13px;

    border-radius: 5px;
    border: 1px solid ${({ isError }) => (isError ? '#f13c3c' : '#cecece')};
    padding: 0.3rem;
    animation-delay: 0.25s;
    animation: ${({ isError }) => (isError ? bounce : fixed)} 0.5s linear;
    opacity: 1;
    font-weight: 500;
    color: black;

    ::placeholder {
      color: black;
      opacity: 1;
    }
  }

  select {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 0.4rem;
    height: 35px;

    border-radius: 5px;
    border: #fafafa;

    margin-bottom: 10px;

    color: black;
    background-color: #fafafa;
    cursor: pointer;
  }

  label {
    color: #487eff;
    font-size: 17px;
    font-weight: 500;
  }
`;
export const ErrorContainer = styled.div`
  font-size: 0.8rem;
  width: 100%;
  color: red;

  display: flex;
`;

export const RadioContainer = styled.ul`
  li {
    list-style: none;
  }
`;

export const RadioInput = styled.input<IPropsRadio>`
  margin: 0 1rem 0 0 !important;
  width: 20px !important;
  height: 20px;
  accent-color: ${({ inputColor }) => (inputColor ? inputColor : '#228af1')};
`;
export const CheckboxContainer = styled(RadioContainer)`
  width: 100%;
  height: auto;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  grid-template-rows: auto;
  gap: 0.625rem;
  justify-content: space-evenly;
  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    input {
      width: 20px;
      height: 20px;

      margin-right: 5px;
    }

    label {
      width: 100%;
      flex: 1;
      margin-bottom: 0;
    }
  }
  .otherInput {
    grid-column: span 2;
    padding: 0.5rem;
    input {
      width: 100%;
      height: 30px;
    }
  }
`;
