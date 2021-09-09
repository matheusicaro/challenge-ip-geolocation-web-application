import React from 'react';

import { Typography } from '@material-ui/core';
import styled from 'styled-components';

/**
 * Footer component
 *
 */
const Footer: React.FC = () => {
  return (
    <Container>
      <a href="https://matheusicaro.com" rel="noopener noreferrer" target="_blank" title="Project repository">
        <Typography variant="body1" component="span">
          matheusicaro.com
        </Typography>
      </a>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  text-align: center;
  position: absolute;
  bottom: 40px;
  width: 100%;

  & > a {
    text-decoration: auto;
    opacity: 0.4;
    color: black;

    :hover {
      text-decoration: underline;
      opacity: 1;
    }
  }
`;
