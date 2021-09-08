import React from 'react';

import { CircularProgress } from '@material-ui/core';

type Props = {
  children?: never;
  style?: React.CSSProperties;
  id?: string;
};

const LoadingSpin: React.FC<Props> = ({ style, id }) => {
  return <CircularProgress id={id} style={style} className="Loading-progress-circle" />;
};

export default LoadingSpin;
