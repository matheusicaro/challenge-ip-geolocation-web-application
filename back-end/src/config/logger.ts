/**
 * class intended for application log configuration.
 *
 * Log files: they are generated with names specified in the 'transport' configuration and when executed they must be generated with
 * the name of the folder informed in the constant of line 13.
 *
 * @returns LoggerInstance: {
 *   error: method to log messages or errors caught me exceptions
 *   infor: method to log relevant information and notices
 * }
 */
import { join } from 'path';
import { existsSync as verifyFileLogExisit, mkdirSync as buildFile } from 'fs';
import { createLogger, format, transports } from 'winston';

import environment from './environment';

const DIRECTORY_NAME_TO_LOG = 'logs';

if (!verifyFileLogExisit(DIRECTORY_NAME_TO_LOG)) {
  buildFile(DIRECTORY_NAME_TO_LOG);
}

const errorLog = join(DIRECTORY_NAME_TO_LOG, 'error.log');
const combinedLog = join(DIRECTORY_NAME_TO_LOG, 'combined.log');
const exceptionsLog = join(DIRECTORY_NAME_TO_LOG, 'exceptions.log');

const transportErrorLog = new transports.File({ filename: errorLog, level: 'error' });
const transportCombinedLog = new transports.File({ filename: combinedLog });
const transportExceptionsLog = new transports.File({ filename: exceptionsLog });

const formatLogger = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

const LoggerInstance = createLogger({
  level: 'info',
  format: formatLogger,
  transports: [transportErrorLog, transportCombinedLog, transportExceptionsLog]
});

if (environment.NODE_ENV !== 'production') {
  const transportDebugLog = new transports.Console({
    format: format.combine(
      format.colorize(),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    level: 'debug'
  });

  LoggerInstance.add(transportDebugLog);
}

export const Logger = {
  error: (error: any): void => {
    const message = error ? error.message : 'empty';
    const stack = error ? error.stack : 'empty';
    LoggerInstance.error(`${message} - stack_trace: ${JSON.stringify(stack)}}`);
  },

  info: (message = 'empty'): void => {
    LoggerInstance.info(message);
  }
};
