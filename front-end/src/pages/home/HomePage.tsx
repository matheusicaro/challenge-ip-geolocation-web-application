import React from 'react';

import styled from 'styled-components';

import IPGeolocation from '../../components/IPGeolocation';

const Home: React.FC = (props) => {
  return (
    <Container>
      <IPGeolocation className="ip-gelocation-container" />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: 98vh;

  .ip-gelocation-container {
    margin-left: auto;
    margin-right: auto;
  }
`;
