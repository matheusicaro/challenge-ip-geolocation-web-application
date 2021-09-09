import styled from 'styled-components';

export const Container = styled.section`
  width: fit-content;
  width: 80%;

  min-height: 460px;
  justify-content: space-between;

  display: grid;
  max-width: 900px;
  grid-template-columns: 100%;
  grid-row-gap: 30px;

  .input-container {
    grid-template-columns: 80% 20%;
    display: grid;

    & > button {
      width: fit-content;
      align-self: center;
      justify-self: center;
    }
  }

  .paper-container {
    font-size: 1.25em;
    background-color: rgb(212 237 255);
    margin: 10px 0;
  }

  #hours-difference {
    text-align: center;
    padding: 2%;
  }

  #info-container {
    place-self: center;
  }
`;
