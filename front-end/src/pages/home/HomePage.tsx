import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { loadRequest, loadSuccess } from '../../store/ducks/clientIP/actions';

type StateProps = {
  clientIp: string;
};

type DispatchProps = {
  loadRequest: () => void;
  loadSuccess: ({ ip }: { ip: string }) => void;
};

const Home: React.FC<StateProps & DispatchProps> = ({ clientIp }) => {
  return <div>{clientIp || 'none'}</div>;
};

const mapStateToProps = (state: ApplicationState) => ({
  clientIp: state.clientIp.ip,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadRequest, loadSuccess }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
