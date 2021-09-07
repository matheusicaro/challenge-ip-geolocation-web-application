import { Request, Response } from 'express';
import { Logger } from '../config/logger';
import { MESSAGES } from '../constants';
import { ErrorResponse } from '../exceptions';
import { ApiResponse, IPGeolocation } from '../models';
import { GeolocationService } from '../services';

export default class GeolocationController {
  public static async getIPGeolocation(req: Request, res: Response): Promise<Response<IPGeolocation> | Response<ApiResponse>> {
    try {
      const body = req.body;

      const invalidRequiredParams = !body || !body.origin || !body.destiny;

      if (invalidRequiredParams) res.status(400).json(new ApiResponse(MESSAGES.INVALID_BODY));

      const response = await GeolocationService.getIPGeolocation(body.origin, body.destiny);

      return res.status(200).json(response);
    } catch (error) {
      if (error instanceof ErrorResponse) return res.status(error.statusCode).json(new ApiResponse(error.message));

      Logger.error(error);
      return res.status(500).json(new ApiResponse(MESSAGES.INTERNAL_ERRO));
    }
  }
}
