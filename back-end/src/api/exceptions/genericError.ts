import { Logger } from '../../config/logger';
import { MESSAGES } from '../constants';

export default class GenericError extends Error {
  constructor(error: Error | any) {
    super(MESSAGES.INTERNAL_ERROR);

    const message = error ? error.message : 'empty message';
    const stack = error ? error.stack : 'empty stack trace';

    Logger.error(`${message}, stack_trace: ${stack}`);
  }
}
