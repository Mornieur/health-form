import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (max-width: 810px) {
    display: flex;
    flex-direction: column;
  }
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
    cursor: pointer;

    @media (max-width: 810px) {
      position: relative;
      margin: 0 auto;

      right: 0;
      top: 1rem;
    }
  }
`;

export const CompTermOne = styled.section`
  margin: 1rem;
  padding: 1rem;
  position: relative;

  h1 {
    font-size: 1.7rem;
    padding-bottom: 1rem;
  }

  article {
    grid-area: 1 / 1 / 2 / 2;
    max-width: 700px;

    @media (max-width: 810px) {
      padding: 0;
      margin: 0;
    }
  }
`;

export const CompTermTwo = styled.section`
  article {
    grid-area: 1 / 2 / 2 / 3;
    padding-top: 5rem;
    //max-width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 810px) {
      padding: 0;
      margin: 0;
    }

    label {
      //position: absolute;
      //bottom: 5px;
      display: flex;
      justify-content: center;
      align-items: center;

      color: var(--blue-dark);
      font-weight: 500;

      input {
        margin: 5px;
        width: 1rem;
        cursor: pointer;
      }
    }
    .disabled-btn {
      background: #ccc;
    }
  }
`;

export const WarningMessage = styled.div`
  height: 30px;
  p {
    color: red;
  }
`;

export const AcceptedTerms = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
