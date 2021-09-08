// @ts-nocheck

import Service from '../../../api/services/geolocation.service';
import exampleDataResponseGeolocationApi from '../../json/example-response-geolocation-api.json';
import exampleDataInvalidResponseGeolocationApi from '../../json/example-invalid-responses-from-geolocation-api.json';

jest.mock('../../../api/integration/geolocationApi.integration');
import { ResponseGeolocationAPI } from '../../../api/integration/';

jest.mock('../../../config/logger');
import { Logger } from '../../../config/logger';

import GeolocationAPI from '../../../api/integration/geolocationApi.integration';
import { Geolocation, IPGeolocation } from '../../../api/models';
import { ErrorResponse, GenericError, HttpStatusCode } from '../../../api/exceptions';

describe("Check method 'getIPGeolocation'", () => {
  let responseGeolocationAPI: ResponseGeolocationAPI;

  beforeEach(() => {
    jest.clearAllMocks();

    responseGeolocationAPI = new ResponseGeolocationAPI(exampleDataResponseGeolocationApi);
  });

  test('Should return expected IPGeolocation in success case', async () => {
    const geolocation = new Geolocation(
      responseGeolocationAPI.getIp,
      responseGeolocationAPI.getContry,
      responseGeolocationAPI.getCity,
      responseGeolocationAPI.dateTime,
      `${responseGeolocationAPI.timezone} (GTM${responseGeolocationAPI.timezoneOffset})`
    );

    const expected = new IPGeolocation(geolocation, geolocation);

    GeolocationAPI.getGeolocation = jest.fn().mockImplementation(() => {
      return new Promise(resolve => {
        resolve(responseGeolocationAPI);
      });
    });

    const returned = await Service.getIPGeolocation('origin_ip', 'destiny_ip');

    expect(GeolocationAPI.getGeolocation).toHaveBeenCalledTimes(2);
    expect(returned).toEqual(expected);
  });

  test('Should return exception expected and logging the error if external GeolocationAPI do not works', async () => {
    const expected = new ErrorResponse('Failed to request data in an external service', HttpStatusCode.UNPROCESSABLE);

    GeolocationAPI.getGeolocation = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        reject();
      });
    });

    try {
      await Service.getIPGeolocation('origin_ip', 'destiny_ip');
    } catch (error) {
      const logger = jest.spyOn(Logger, 'error');

      expect(error).toEqual(expected);
      expect(logger.mock.calls.length).toEqual(1);
    }
  });

  test('Should return exception expected if response obtained from the GeolocationAPI is invalid', async () => {
    const firstArgument = 'origin_ip';
    const expected = new ErrorResponse(`No data was found for the IP informed: ${firstArgument}`, HttpStatusCode.NOT_FOUND);

    const invlidResponses = exampleDataInvalidResponseGeolocationApi as Array<any>;
    invlidResponses.push(null, {});

    for (const input of invlidResponses) {
      try {
        GeolocationAPI.getGeolocation = jest.fn().mockImplementation(() => {
          return new Promise(resolve => {
            resolve(input);
          });
        });

        await Service.getIPGeolocation(firstArgument, 'destiny_ip');
      } catch (error) {
        expect(error).toEqual(expected);
      }
    }
  });

  test('Should return exception expected if any mistakes happen', async () => {
    const error = new Error();
    const expected = new GenericError(error);

    Logger.error = jest.fn().mockImplementation(() => {
      throw error;
    });

    GeolocationAPI.getGeolocation = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        reject();
      });
    });

    try {
      await Service.getIPGeolocation('origin_ip', 'destiny_ip');
    } catch (err) {
      expect(err).toEqual(error);
    }
  });
});
