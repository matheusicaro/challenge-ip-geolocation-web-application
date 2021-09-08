import React from 'react';
import { connect } from 'react-redux';

import Alert from '@material-ui/lab/Alert';
import { bindActionCreators, Dispatch } from 'redux';

import { MESSAGES } from '../../constants';
import API, { GeolocationResponseApi } from '../../services/api';
import { ApplicationState } from '../../store';
import { loadRequest, loadSuccess } from '../../store/ducks/clientIP/actions';
import { State as StateClientIP } from '../../store/ducks/clientIP/types';
import StringUtils from '../../utils/StringUtils';

import Loading from './components/Loading';
import IPGeolocationView from './IPGeolocationView';
import { Container } from './styles';
import { StateProps, DispatchProps, State, GeolocationIPs } from './types';

type OwnProps = {
  className?: string;
  children?: never;
};

const IPGeolocation: React.FC<StateProps & DispatchProps & OwnProps> = (props) => {
  const [state, setState] = React.useState<State>(initialState());

  const isEmptyClientIP = isEmptyStoreClientIP(props.clientIp);
  const isLoading = isEmptyClientIP || props.clientIp.loading;
  const isAvailableClientIP = !isEmptyClientIP && !isLoading;

  if (isEmptyClientIP) {
    props.loadRequest();
  }

  const getGeolocationIPs = (destinyIp: string) => {
    if (!state.fetch.loading) {
      setState((prev) => ({ ...prev, fetch: { ...prev.fetch, loading: true } }));

      const onRequestSuccess = (data: GeolocationResponseApi) => setState((prev) => newStateGeolocation(prev, convertToGeolocation(data)));

      API.getGeolocationIP(props.clientIp.ip, destinyIp)
        .then((response) => onRequestSuccess(response.data))
        .catch((error) => setState((prev) => ({ ...prev, fetch: { error: true, errorMessage: error.message, loading: false } })));
    }
  };

  return (
    <Container className={props.className}>
      {true && <Loading />}

      {props.clientIp.error && <Alert severity="warning">{MESSAGES.DETECT_AUTOMATIC_IP_FAILED}</Alert>}

      {isAvailableClientIP && (
        <IPGeolocationView
          handleGeolocationFetch={getGeolocationIPs}
          handleEditClientIP={props.loadSuccess}
          clientIP={props.clientIp.ip}
          geolocationFetch={state.fetch}
          hoursDifference={state.geolocationHoursDifference}
        />
      )}
    </Container>
  );
};

const initialState = (): State => {
  return {
    fetch: {
      error: false,
      loading: false,
    },
  };
};

const newStateGeolocation = (previosState: State, geolocation: GeolocationIPs): State => {
  const hoursDifference = geolocation.origin.localTime.getHours() - geolocation.destiny.localTime.getHours();

  return {
    ...previosState,
    fetch: { loading: false, error: false, data: geolocation },
    geolocationHoursDifference: hoursDifference,
  };
};

const convertToGeolocation = (data: GeolocationResponseApi): GeolocationIPs => {
  return {
    origin: {
      ...data.destiny,
      localTime: new Date(data.origin.localTime),
    },
    destiny: {
      ...data.destiny,
      localTime: new Date(data.destiny.localTime),
    },
  };
};

const isEmptyStoreClientIP = (store: StateClientIP) => {
  return StringUtils.isNullOrEmpty(store.ip) && !store.loading && !store.error;
};

const mapStateToProps = (state: ApplicationState) => ({
  clientIp: state.clientIp,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadRequest, loadSuccess }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IPGeolocation);
