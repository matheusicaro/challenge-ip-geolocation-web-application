export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
  UNPROCESSABLE = 422
}

export default class ErrorResponse extends Error {
  public readonly message: string;
  public readonly statusCode: HttpStatusCode;

  constructor(message: string, statusCode: HttpStatusCode) {
    super(message);

    this.message = message;
    this.statusCode = statusCode;
  }
}
