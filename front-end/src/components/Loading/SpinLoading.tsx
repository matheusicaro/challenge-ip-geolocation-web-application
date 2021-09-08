import React from 'react';

import { CircularProgress } from '@material-ui/core';

type Props = {
  children?: never;
  style?: React.CSSProperties;
};

const LoadingSpin: React.FC<Props> = ({ style }) => {
  return <CircularProgress style={style} className="Loading-progress-circle" />;
};

export default LoadingSpin;
