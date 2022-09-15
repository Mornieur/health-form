import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  height: 100% !important;
  background-color: #fff;
`;

export const Content = styled.div`
  margin: 0 auto;
  background-color: #fff;
  width: 100%;
  max-width: 1300px;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 810px) {
    flex-direction: column-reverse;
  }
`;

export const ContOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  max-width: 700px;
  text-align: center;
  padding: 1rem;

  img {
    object-fit: contain;
    max-width: 400px;
  }

  @media (max-width: 810px) {
    img {
      display: none !important;
    }
  }

  h1 {
    color: var(--blue-dark);
    font-weight: 500;

    @media (max-width: 810px) {
      padding-top: 0;
      font-size: 25px;
      font-weight: 600;
    }
  }

  button {
    color: white;
    font-size: 25px;
    background-color: var(--blue-dark);
    border-radius: 50px;
    height: 50px;
    width: 200px;
    border: none;
    margin: 1rem;
    cursor: pointer;
  }
`;

export const ContTwo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  img {
    margin: auto;
    height: 100%;
    position: relative;
    max-width: 80% !important;
    object-fit: contain;
  }

  @media (max-width: 810px) {
    padding: 1rem;
  }
`;
