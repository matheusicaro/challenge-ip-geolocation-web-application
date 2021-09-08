import React from 'react';

import styled from 'styled-components';

import { SpinLoading } from '../..';

const Loading: React.FC = () => {
  return (
    <Section>
      <h5>IDENTIFYING YOUR IP...</h5>
      <SpinLoading />
    </Section>
  );
};

const Section = styled.section``;

export default Loading;
