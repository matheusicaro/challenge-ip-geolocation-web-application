import React from 'react';

import { Alert } from '@material-ui/lab';
import styled from 'styled-components';

import { SpinLoading } from '../..';
import { MESSAGES } from '../../../constants';

const Loading: React.FC = () => {
  return (
    <Section>
      <Alert severity="info" component="span">
        <span>{MESSAGES.LOADING_CLIENT_IP}</span>
        <SpinLoading id="spin-container" />
      </Alert>
    </Section>
  );
};

const Section = styled.section`
  text-align: center;

  & > span {
    align-items: center;
  }

  .MuiAlert-message {
    display: flex;
    align-items: center;
    width: 100%;

    #spin-container {
      margin-left: auto;
      width: 30px;
      height: 30px;
    }
  }
`;

export default Loading;
