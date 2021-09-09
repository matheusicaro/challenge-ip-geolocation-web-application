import React from 'react';

import styled from 'styled-components';

import IPGeolocation from '../../components/IPGeolocation';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Home: React.FC = (props) => {
  return (
    <Container>
      <Banner />
      <IPGeolocation className="ip-gelocation-container" />
      <Footer />

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
