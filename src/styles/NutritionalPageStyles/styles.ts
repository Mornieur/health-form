import styled from 'styled-components';

export const View = styled.div`
  display: grid;
  place-items: center;
  background: #ddd;
  padding: 5rem;

  @media (max-width: 800px) {
    padding: 0;
  } ;
`;
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  header {
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;

    .image-header {
      object-fit: contain;
    }
  }
  main {
    width: 100%;
    padding: 1rem;

    border-radius: 1rem;
  }

  border-radius: 1rem;
`;
