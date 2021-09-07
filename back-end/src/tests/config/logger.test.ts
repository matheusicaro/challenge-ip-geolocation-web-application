/**
 * Mocking methods used from the external Winston lib used in the script to be tested.
 */
jest.mock('winston', () => {
  const formatMock = {
    combine: jest.fn(),
    timestamp: jest.fn(),
    printf: jest.fn(),
    colorize: jest.fn()
  };

  const transportsMock = {
    Console: jest.fn(),
    File: jest.fn()
  };

  const loggerMock = {
    info: jest.fn(),
    add: jest.fn()
  };

  return {
    format: formatMock,
    transports: transportsMock,
    createLogger: jest.fn(() => loggerMock)
  };
});

import * as winston from 'winston';
import { Logger } from '../../config/logger';

describe('logger.ts', () => {
  test('Should return corret format for timestamp when format.timestam is called', async () => {
    const expectedTimestampFormat = {
      format: 'YYYY-MM-DD HH:mm:ss'
    };

    Logger.info('log message');

    expect(winston.format.timestamp).toHaveBeenCalledWith(expectedTimestampFormat);
  });

  test('Should return message when format.printf is called', async () => {
    const info = {
      level: '_level',
      message: '_message',
      ['timestamp']: '_timestamp'
    };
    const expectedMessage = `${info.timestamp} ${info.level}: ${info.message}`;

    Logger.info('log message');

    const mockAddListener = jest.spyOn(winston.format, 'printf');
    const printfCaptured = mockAddListener.mock.calls[0][0];

    expect(printfCaptured(info)).toEqual(expectedMessage);
  });

  test('Should return correct config input when createLogger is called', async () => {
    const expectedConfig = {
      level: 'info'
    };

    Logger.info('log message');

    const createLoggerCaptured = jest.spyOn(winston, 'createLogger');
    const configCaptured = createLoggerCaptured.mock.calls[0][0];

    expect(configCaptured).not.toEqual(undefined);
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore: Object is possibly 'null'.
    expect(configCaptured.level).toEqual(expectedConfig.level);
  });
});
