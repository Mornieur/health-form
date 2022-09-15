import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  align-items: center;

  .disabled {
    input,
    label {
      width: 0;
      height: 0;
      display: none;
    }
  }

  .inputStyle {
    input {
      margin-bottom: 18rem;

      @media (max-width: 1143px) {
        margin: 0;
      }
    }
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    align-items: center;
  }

  form {
    width: 100%;
    padding-bottom: 1rem;

    button {
      width: 150px;
      height: 30px;
      border: 2px solid #487eff;
      border-radius: 6px;
      color: #487eff;
      font-weight: 600;
      background-color: #fff;
      padding: 1rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
    }
  }
  section {
    width: 100%;

    h3 {
      font-size: 1.7rem;
      text-align: center;
      color: #0a1f52;
    }

    .emergencyCase {
      display: flex;
      justify-content: center;
      width: 100%;
      text-align: center;
      margin-top: 1rem;
    }
  }

  .agreement-btn {
    display: flex;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    ul {
      width: 100%;

      li {
        display: flex;
        padding: 0.4rem;
        align-items: center;
      }
    }
  }
`;

export const Grid = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 460px));
  grid-template-rows: auto;
  justify-content: space-evenly;

  row-gap: 1rem;

  div {
    margin-top: 0.625rem !important;
    border-radius: 12px;
    background: #fff;
  }
`;

export const WarningText = styled.div`
  p {
    color: red;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;
