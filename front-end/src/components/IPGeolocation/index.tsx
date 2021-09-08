import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { loadRequest, loadSuccess } from '../../store/ducks/clientIP/actions';
import { State as StateClientIP } from '../../store/ducks/clientIP/types';
import StringUtils from '../../utils/StringUtils';

import DialogGetIP from './components/DialogGetIP';
import Loading from './components/Loading';
import IPGeolocationView from './IPGeolocationView';

type StateProps = {
  clientIp: StateClientIP;
};

type DispatchProps = {
  loadRequest: () => void;
  loadSuccess: (ip: string) => void;
};

const IPGeolocation: React.FC<StateProps & DispatchProps> = (props) => {
  const isEmptyClientIP = isEmptyStoreClientIP(props.clientIp);
  const isLoading = isEmptyClientIP || props.clientIp.loading;
  const isAvailableClientIP = !isEmptyClientIP && !isLoading && !props.clientIp.error;

  if (isEmptyClientIP) {
    props.loadRequest();
  }

  return (
    <main>
      {isLoading && <Loading />}

      <DialogGetIP open={props.clientIp.error} onClickSend={props.loadSuccess} />

      {isAvailableClientIP && <IPGeolocationView handleEditClientIP={props.loadSuccess} clientIP={props.clientIp.ip} />}
    </main>
  );
};

const isEmptyStoreClientIP = (store: StateClientIP) => {
  return StringUtils.isNullOrEmpty(store.ip) && !store.loading && !store.error;
};

const mapStateToProps = (state: ApplicationState) => ({
  clientIp: state.clientIp,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadRequest, loadSuccess }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IPGeolocation);
