import { Logger } from '../../config/logger';

export default class HttpError extends Error {
  constructor(message: string, data: any) {
    super(message);

    Logger.error(`${message}, data: ${JSON.stringify(data)}`);
  }
}
