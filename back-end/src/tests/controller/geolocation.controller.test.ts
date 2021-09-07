// @ts-nocheck

import { mockRequest, mockResponse } from './util';
import controller from '../../controllers/geolocation.controller';
import { IPGeolocation, Geolocation } from '../../models';

jest.mock('../../config/logger');
import { Logger } from '../../config/logger';

jest.mock('../../services/geolocation.service');
import Service from '../../services/geolocation.service';
import { ErrorResponse, HttpStatusCode } from '../../exceptions';

describe("Check method 'getIPGeolocation'", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should return status code 200 and expected body', async () => {
    const geolocation = new Geolocation('ip', 'contry', 'city', new Date(), 'timeZone');
    const expectedBody = new IPGeolocation(geolocation, geolocation);
    const requestBodyReceived = { origin: 'ip', destiny: 'ip' };
    const res = mockResponse();

    Service.getIPGeolocation = jest.fn().mockImplementation(() => {
      return expectedBody;
    });

    await controller.getIPGeolocation(mockRequest(requestBodyReceived), res);

    const bodyCaptured = res.json.mock.calls[0][0];

    expect(Service.getIPGeolocation).toHaveBeenCalledTimes(1);
    expect(Service.getIPGeolocation).toHaveBeenCalledWith(requestBodyReceived.origin, requestBodyReceived.destiny);
    expect(bodyCaptured).toEqual(expectedBody);
  });

  test('Should return 400 and the expected body if request body is invalid', async () => {
    const invalidsRquestBody = [undefined, {}, { origin: undefined, destiny: undefined }];

    for (const body of invalidsRquestBody) {
      const res = mockResponse();

      await controller.getIPGeolocation(mockRequest(body), res);

      const responseBodyCaptured = res.json.mock.calls[0][0];

      expect(res.status).toHaveBeenCalledWith(400);
      expect(responseBodyCaptured).not.toBeUndefined();
      expect(responseBodyCaptured.message).toEqual('Missing or invalid body');
    }
  });

  test('When any error is captured it must be logged.', async () => {
    const res = mockResponse();
    const error = new Error('error message');

    const mockImplementationsToThrowErrorWhenStatus200 = jest.fn().mockImplementation(statusCode => {
      if (statusCode === 200) throw error;
      return res;
    });

    res.status = mockImplementationsToThrowErrorWhenStatus200;

    await controller.getIPGeolocation(mockRequest(), res);

    const logger = jest.spyOn(Logger, 'error');

    const inputCaptured = logger.mock.calls[0][0];

    expect(logger.mock.calls.length).toEqual(1);
    expect(inputCaptured).toEqual(error);
  });

  test('Should return dynamic API Response when exception captured is Error Response.', async () => {
    const res = mockResponse();
    const errorExpected = new ErrorResponse('Not found data', HttpStatusCode.NOT_FOUND);

    Service.getIPGeolocation = jest.fn().mockImplementation(() => {
      throw errorExpected;
    });

    await controller.getIPGeolocation(mockRequest({ origin: 'ip', destiny: 'ip' }), res);

    const logger = jest.spyOn(Logger, 'error');

    const responseBodyCaptured = res.json.mock.calls[0][0];

    expect(res.status).toHaveBeenCalledWith(errorExpected.statusCode);
    expect(responseBodyCaptured).not.toBeUndefined();
    expect(responseBodyCaptured.message).toEqual('Not found data');
    expect(logger.mock.calls.length).toEqual(0);
  });
});
